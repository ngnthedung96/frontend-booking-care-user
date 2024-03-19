import router from '../../../routers'
import { systemAxios } from "@/services/axios.service";
import tokenService from "@/services/token.service";

// const BASE_API = "patients/";
const GETPATIENTS_API = "patients/get-list";
const GETEXCEL_API = "patients/export-excel";

export const state = {
  patientList: {},
};

export const mutations = {
  fetchDataList(state, newValue) {
    state.patitentList = newValue;
  },
  fetchConfig(state, newValue) {
    state.configpatitentDatas = newValue;
  },
  addData(state, newValue) {
    state.patitentDatas.unshift(newValue);
  },
};

export const actions = {
  async getListpatient({ commit, dispatch }, requestBody) {
    try {
      const res = await systemAxios.post(GETPATIENTS_API, requestBody);
      const { data, msg, error } = res.data;
      console.log(data);
      if (!error) {
        commit("fetchDataList", data);
      } else {
        dispatch("notification/error", msg, { root: true });
      }
    } catch (err) {
      if (err.response) {
        dispatch("notification/error", err.response.data.msg, { root: true });
      } else {
        dispatch("notification/error", err, { root: true });
      }
    }
  },
  async getListExcel({ dispatch }) {
    try {
      const res = await systemAxios.get(GETEXCEL_API);
      const { data, msg, error } = res.data;
      if (!error) {
        window.open(
          data,
          "_blank" // <- This is what makes it open in a new window.
        );
        dispatch("notification/success", msg, { root: true });
      } else {
        dispatch("notification/error", msg, { root: true });
      }
    } catch (err) {
      if (err.response) {
        dispatch("notification/error", err.response.data.msg, { root: true });
      } else {
        dispatch("notification/error", err, { root: true });
      }
    }
  },
  async updatePatient({ dispatch, rootState }, patient) {
    const id = rootState.auth.currentUser["_id"];
    try {
      const result = await systemAxios.put(`/users/edit-user/${id}`, patient);
      const { message, error, data } = result.data;
      if (!error) {
        tokenService.setAdmin(data);
        dispatch("notification/success", message, { root: true });
      } else {
        dispatch("notification/error", message);
      }
    } catch (err) {
      if (err.response) {
        dispatch("notification/error", err.response.data.msg, { root: true });
      } else {
        dispatch("notification/error", err, { root: true });
      }
    }
  },
  async updatePassword({dispatch}, data) {
    const email = data.email
    try {
      const result = await systemAxios.post(`/auth/sending-mail-reset-pass?email=${email}`)
      const { message, error } = result.data;
      if (!error) {
        dispatch("notification/success", message, { root: true });
      }
      else {
        dispatch("notification/error", message);
      }
    }
    catch(err) {
      if (err.response) {
        dispatch("notification/error", err.response.data.msg, { root: true });
      } else {
        dispatch("notification/error", err, { root: true });
      }
    }
  },
  async newPassword({dispatch}, data) {
    try {
      const result = await systemAxios.post('/auth/check-code-change-pass',{
        code: data.code,
        newPassword: data.password,
        id: data.id
      })
      const { message, error } = result.data;
      if (!error) {
        dispatch("notification/success", message, { root: true });
      }
      else {
        dispatch("notification/error", message);
      }
    }
    catch(err) {
      if (err.response) {
        dispatch("notification/error", err.response.data.msg, { root: true });
      } else {
        dispatch("notification/error", err, { root: true });
      }
    }
  },
  async verifyEmail({dispatch}, data) {
    try {
      const id = data.id
      const result = systemAxios.get(`/auth/verify-email/${id}`)
      const { message, error } = result.data;
      if (!error) {
        dispatch("notification/success", message, { root: true });
        router.push('/dang-nhap')
      }
      else {
        dispatch("notification/error", message);
      }
    }
    catch (err) {
      if (err.response) {
        dispatch("notification/error", err.response.data.msg, { root: true });
      } else {
        dispatch("notification/error", err, { root: true });
      }
    }
  }
};

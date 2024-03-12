import { systemAxios } from "@/services/axios.service";

const BASE_API = "users/";
const GETUSERS_API = "users/get-list";
const GETEXCEL_API = "users/export-excel";

export const state = {
  userList: {},
};

export const mutations = {
  fetchDataList(state, newValue) {
    state.userList = newValue;
  },
  fetchConfig(state, newValue) {
    state.configUserDatas = newValue;
  },
  addData(state, newValue) {
    state.userDatas.unshift(newValue);
  },
  updateData: (state, newValue) => {
    const index = state.userDatas.findIndex((item) => item.id === newValue.id);
    if (index !== -1) {
      state.userDatas.splice(index, 1, newValue);
    }
  },
  removeData(state, newValue) {
    const rem = state.userDatas.filter((item) => item.id !== newValue.id);
    state.userDatas = state.userDatas.filter((item) => item.id !== newValue.id);
  },
};

export const actions = {
  async getListUser({ commit, dispatch }, requestBody) {
    try {
      const res = await systemAxios.post(GETUSERS_API, requestBody);
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
  async getListExcel({ commit, dispatch }) {
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
};

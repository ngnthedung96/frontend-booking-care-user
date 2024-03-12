import { systemAxios } from "@/services/axios.service";

const BASE_API = "http://localhost:3333/api/permissions/";

export const state = {
  pmDatas: [],
};

export const mutations = {
  fetchData(state, newValue) {
    state.pmDatas = newValue;
  },
  addData(state, newValue) {
    state.pmDatas.unshift(newValue);
  },
  updateData: (state, newValue) => {
    const index = state.pmDatas.findIndex((item) => item.id === newValue.id);
    if (index !== -1) {
      state.pmDatas.splice(index, 1, newValue);
    }
  },
  removeData(state, newValue) {
    state.pmDatas = state.pmDatas.filter((item) => item.id !== newValue.id);
  },
};

export const actions = {
  async getListPm({ commit, dispatch }) {
    try {
      const res = await systemAxios.get(BASE_API);
      commit("fetchData", res.data.data);
    } catch (err) {
      dispatch("notification/error", err.response.data.msg, { root: true });
    }
  },
  async createPm({ commit, dispatch }, { obj }) {
    let result = false;
    try {
      console.log("hadhahdahd");
      const res = await systemAxios.post(BASE_API, obj);
      const { msg, error, data } = res.data;
      if (!error) {
        commit("addData", data);
        console.log("adadada");
        dispatch("notification/success", "Create Success", { root: true });
        result = true;
      } else {
        console.log("bbbbbbb");
        dispatch("notification/error", msg, { root: true });
      }
    } catch (err) {
      console.log("ccccc");
      dispatch("notification/error", err.response.data, { root: true });
    }
    console.log("ra vae", result);
    return result;
  },
  async updatePm({ commit, dispatch }, { obj }) {
    let result = false;
    try {
      const res = await systemAxios.put(BASE_API + obj.id, obj);
      const { msg, error, data } = res.data;

      if (!error) {
        commit("updateData", data);
        dispatch("notification/success", msg, { root: true });
        result = true;
      } else {
        dispatch("notification/error", msg, { root: true });
      }
    } catch (err) {
      dispatch("notification/error", err.message, { root: true });
    }

    return result;
  },
  async deletePm({ commit, dispatch }, { obj }) {
    let status = false;
    try {
      const res = await systemAxios.delete(BASE_API + obj.id);
      const { msg, error } = res.data;
      if (!error) {
        commit("removeData", obj);
        dispatch("notification/success", msg, { root: true });
        status = true;
      } else {
        dispatch("notification/error", msg, { root: true });
      }
    } catch (err) {
      console.log("ci nay hu");
      dispatch("notification/error", err.message, { root: true });
    }

    return status;
  },
};

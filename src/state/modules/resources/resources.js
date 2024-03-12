import { systemAxios } from "@/services/axios.service";

const BASE_API = "resources/";
const GETLIST_API = "resources/get-list";
const GETALL_API = "resources/get-all";
const DELETE_API = "resources/delete/";
const RESTORE_API = "resources/restore/";

export const state = {
  listResource: [],
  allResource: [],
};

export const mutations = {
  fetchData(state, newValue) {
    state.listResource = newValue;
  },
  fetchDataAll(state, newValue) {
    state.allResource = newValue;
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
  async getResources({ commit, dispatch }, requestBody) {
    try {
      const res = await systemAxios.post(GETLIST_API, requestBody);
      const { data, msg, error } = res.data;
      if (!error) {
        commit("fetchData", data);
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
  async getAllResource({ commit, dispatch }, requestBody) {
    try {
      const res = await systemAxios.get(GETALL_API, requestBody);
      const { data, msg, error } = res.data;
      if (!error) {
        commit("fetchDataAll", data);
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

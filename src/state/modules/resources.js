import { systemAxios } from "@/services/axios.service";

import { bus } from "@/main";
const BASE_API = "http://localhost:3333/api/resources/";

export const state = {
  resourceDatas: [],
};

export const mutations = {
  fetchData(state, newValue) {
    state.resourceDatas = newValue;
  },
  addData(state, newValue) {
    state.resourceDatas.unshift(newValue);
  },
  updateData: (state, newValue) => {
    const index = state.resourceDatas.findIndex(
      (item) => item.id === newValue.id
    );
    if (index !== -1) {
      state.resourceDatas.splice(index, 1, newValue);
    }
  },
  removeData(state, newValue) {
    const rem = state.resourceDatas.filter((item) => item.id !== newValue.id);
    state.resourceDatas = state.resourceDatas.filter(
      (item) => item.id !== newValue.id
    );
  },
};

export const actions = {
  async getListResources({ commit, dispatch }) {
    try {
      const res = await systemAxios.get(BASE_API);
      commit("fetchData", res.data.data);
    } catch (err) {
      dispatch("notification/error", err.response.data.msg, { root: true });
    }
  },
  async createResource({ commit, dispatch }, { obj }) {
    let result = false;
    try {
      const res = await systemAxios.post(BASE_API, obj);
      const { msg, error, data } = res.data;

      if (!error) {
        commit("addData", data);
        dispatch("notification/success", "Create Success", { root: true });
        result = true;
      } else {
        dispatch("notification/error", msg, { root: true });
      }
    } catch (err) {
      dispatch("notification/error", err.response.data, { root: true });
    }

    return result;
  },
  async updateResource({ commit, dispatch }, { obj }) {
    let result = false;
    try {
      const res = await systemAxios.put(BASE_API + obj.id, obj);
      const { msg, error, data } = res.data;
      if (!error) {
        commit("updateData", data);
        dispatch("notification/success", "Update Success", { root: true });
        result = true;
      } else {
        dispatch("notification/error", msg, { root: true });
      }
    } catch (err) {
      dispatch("notification/error", err.message, { root: true });
    }
    return result;
  },
  async deleteResource({ commit, dispatch }, { obj } = {}) {
    const res = await systemAxios.delete(BASE_API + obj.id);
    const { msg, error } = res.data;
    if (!error) {
      commit("removeData", obj);
      dispatch("notification/success", "Delete Success", { root: true });
    } else {
      dispatch("notification/error", msg, { root: true });
    }
  },
};

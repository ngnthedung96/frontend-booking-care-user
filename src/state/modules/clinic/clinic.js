import { systemAxios } from "@/services/axios.service";

export const state = {
  clinicList: [],
  clinicItem: {},
};

export const mutations = {
  fetchClinic(state, data) {
    state.clinicList = data;
  },
  getClinicItem(state, data) {
    state.clinicItem = data;
  },
};

export const actions = {
  async getListClinic({ commit, dispatch }) {
    try {
      const result = await systemAxios.get("/clinic/get-list?limit=20&page=1");
      const data = result.data.data.docs;
      commit("fetchClinic", data);
    } catch (err) {
      if (err.response) {
        dispatch("notification/error", err.response.data.msg, { root: true });
      } else {
        dispatch("notification/error", err, { root: true });
      }
    }
  },
  async getDetailClinic({ commit, dispatch }, data) {
    try {
      const result = await systemAxios.get(`/clinic/get-one/${data}`);
      const item = result.data.data;
      commit("getClinicItem", item);
    } catch (err) {
      if (err.response) {
        dispatch("notification/error", err.response.data.msg, { root: true });
      } else {
        dispatch("notification/error", err, { root: true });
      }
    }
  },
};

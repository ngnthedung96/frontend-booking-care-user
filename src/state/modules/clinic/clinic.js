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
  async getListClinic({ commit }) {
      const result = await systemAxios.get("/clinic/get-list?limit=20&page=1");
      const data = result.data.data.docs;
      commit("fetchClinic", data);
  },
  async getDetailClinic({ commit }, data) {
    const result = await systemAxios.get(`/clinic/get-one/${data}`);
    const item = result.data.data;
    commit("getClinicItem", item);
  },
};

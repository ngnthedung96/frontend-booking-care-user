import { systemAxios } from "@/services/axios.service";

export const state = {
  specialityList: [],
  specialityItem: {},
};

export const mutations = {
  fetchSpeciality(state, data) {
    state.specialityList = data;
  },
  getSpecialityItem(state, data) {
    state.specialityItem = data;
  },
};

export const actions = {
  async getListSpeciality({ commit }) {
    const result = await systemAxios.get("/specialty/get-list?limit=20&page=1");
    const data = result.data.data.docs;
    commit("fetchSpeciality", data);
  },
  async getDetailSpeciality({ commit }, id) {
    const result = await systemAxios.get(`/specialty/get-one/${id}`);
    const item = result.data.data[0];
    commit("getSpecialityItem", item);
  },
};

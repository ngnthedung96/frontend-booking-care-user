import { systemAxios } from "@/services/axios.service";

export const state = {
  specialityList: [],
}

export const mutations = {
  fetchSpeciality(state, data) {
    state.specialityList = data
  }
}

export const actions = {
  async getListSpeciality({ commit, dispatch }) {
    try {
      const result = await systemAxios.get('/specialty/get-list?limit=20&page=1')
      const data = result.data.data.docs
      commit("fetchSpeciality", data)
    }
    catch(err) {
      if (err.response) {
        dispatch("notification/error", err.response.data.msg, { root: true });
      } else {
        dispatch("notification/error", err, { root: true });
      }
    }
  }
}
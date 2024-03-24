import { systemAxios } from "@/services/axios.service";

export const state = {
  doctorList: []
}

export const mutations = {
  fetchDoctors(state, data) {
    state.doctorList = data
  }
}

export const actions = {
  async getListDoctors({ commit }) {
    const result = await systemAxios.get('/users/get-list-doctor?limit=50&page=1&search=&isSchedule=1&isClinic=1')
    const data = result.data.data.docs
    commit("fetchDoctors", data)
  }
}
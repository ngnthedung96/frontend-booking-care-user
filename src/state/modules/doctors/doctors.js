import { systemAxios } from "@/services/axios.service";

export const state = {
  doctorList: [],
  doctorItem: {}
}

export const mutations = {
  fetchDoctors(state, data) {
    state.doctorList = data
  },
  fetchDetailDoctor(state, data) {
    state.doctorItem = data
  }
} 

export const actions = {
  async getListDoctors({ commit }) {
    const result = await systemAxios.get('/users/get-list-doctor?limit=50&page=1&search=&isSchedule=1&isClinic=1')
    const data = result.data.data.docs
    commit("fetchDoctors", data)
  },
  async getDetailDoctor({commit}, id) {
    const result = await systemAxios.get(`/users/get-doctor/${id}/?isClinic=1&isSchedule=1&isSpecialty=1`)
    const data = result.data.data[0]
    commit("fetchDetailDoctor", data)
  }
}
import { systemAxios } from "@/services/axios.service";

import { bus } from "@/main";
const BASE_API = "http://localhost:3333/api";

export const state = {
  userPmDatas: [],
};

export const mutations = {
  fetchData(state, newValue) {
    state.userPmDatas = newValue;
  },
  addData(state, newValue) {
    state.userPmDatas.unshift(newValue);
  },
  updateData: (state, newValue) => {
    const index = state.userPmDatas.findIndex(
      (item) => item.id === newValue.id
    );
    if (index !== -1) {
      state.userPmDatas.splice(index, 1, newValue);
    }
  },
  removeData(state, newValue) {
    const rem = state.userPmDatas.filter((item) => item.id !== newValue.id);
    state.userPmDatas = state.userPmDatas.filter(
      (item) => item.id !== newValue.id
    );
  },
};

export const actions = {
  async getListUserPms({ commit, dispatch }) {
    try {
      const res = await systemAxios.get(BASE_API + "/users");
      console.log("listy nbhe", res.data.data);
      commit("fetchData", res.data.data);
    } catch (err) {
      dispatch("notification/error", err.response.data.msg, { root: true });
    }
  },
  async createUserPm({ commit, dispatch }, { obj, index }) {
    try {
      const res = await systemAxios.post(BASE_API + "/users", obj);
      const { msg, error, data } = res.data;
      console.log("res day ma", res.data, error);
      if (!error) {
        console.log("chay vao day ma");
        commit("addData", data);
        dispatch("notification/success", "Create Success", { root: true });
        bus.$emit("success", index);
      } else {
        bus.$emit("error", index);
        dispatch("notification/error", msg, { root: true });
      }
    } catch (err) {
      bus.$emit("error", index);
      dispatch("notification/error", err.response.data, { root: true });
    }
  },
  async updateUserPm({ commit, dispatch }, { obj, index }) {
    try {
      const res = await systemAxios.put(BASE_API + `/users/` + obj.id, obj);
      const { msg, error, data } = res.data;
      if (!error) {
        commit("updateData", data);
        dispatch("notification/success", "Update Success", { root: true });
        bus.$emit("success", index);
      } else {
        dispatch("notification/error", msg, { root: true });
        bus.$emit("error", index);
      }
    } catch (err) {
      bus.$emit("error", index);
      dispatch("notification/error", err.message, { root: true });
    }
  },
  async deleteUserPm({ commit, dispatch }, { obj } = {}) {
    const res = await systemAxios.delete(BASE_API + `/users/` + obj.id);
    const { msg, error } = res.data;
    if (!error) {
      commit("removeData", obj);
      dispatch("notification/success", "Delete Success", { root: true });
    } else {
      dispatch("notification/error", msg, { root: true });
    }
  },
};

import { systemAxios } from "@/services/axios.service";

import { bus } from "@/main";

export const state = {
  rolePms: [],
};

export const getters = {
  list: (state) => state.todos,
};

export const mutations = {
  setData(state, newValue) {
    state.rolePms = newValue;
  },
  setRolePms(state, newValue) {
    state.rolePms = newValue;
  },
  addData(state, newValue) {
    state.rolePms.unshift(newValue);
  },
  updateData: (state, newValue) => {
    const index = state.rolePms.findIndex((item) => item.id === newValue.id);
    if (index !== -1) {
      state.rolePms.splice(index, 1, newValue);
    }
  },
  removeData(state, newValue) {
    state.rolePms = state.rolePms.filter((item) => item.id !== newValue.id);
  },
};

export const actions = {
  async getListRole({ commit, dispatch }) {
    try {
      const result = await systemAxios.get("/roles");
      console.log(result.data.data);
      commit("setData", result.data.data);
    } catch (err) {
      dispatch("notification/error", err.message, { root: true });
    }
  },
  async getListRolePms({ commit, dispatch }) {
    try {
      const result = await systemAxios.get("/roles/pms");
      commit("setRolePms", result.data.data);
      console.log("data", result.data.data);
    } catch (err) {
      dispatch("notification/error", err.message, { root: true });
    }
  },
  async createRole({ commit, dispatch }, obj) {
    try {
      const res = await systemAxios.post("/roles", obj);
      const { msg, error, data } = res.data;
      if (!error) {
        commit("addData", data);
        dispatch("notification/success", msg, { root: true });
      } else {
        dispatch("notification/error", msg, { root: true });
      }
    } catch (err) {
      dispatch("notification/error", err.message, { root: true });
    }
  },
  async updateRole({ commit, dispatch }, { obj, index }) {
    console.log("day nhe", obj);
    const res = await systemAxios.put(`/roles/` + obj.id, obj);
    const { msg, error, data } = res.data;
    if (!error) {
      commit("updateData", obj);
      dispatch("notification/success", "Update Success", { root: true });
      bus.$emit("success", index);
    } else {
      dispatch("notification/error", msg, { root: true });
      bus.$emit("error", index);
    }
  },
  async deleteRole({ commit, dispatch }, obj) {
    console.log("delete", obj);
    const res = await systemAxios.delete(`/roles/` + obj.id);
    const { msg, error, data } = res.data;
    if (!error) {
      commit("removeData", obj);
      dispatch("notification/success", msg, { root: true });
    } else {
      dispatch("notification/error", msg, { root: true });
    }
  },
};

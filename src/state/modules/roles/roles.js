import { systemAxios } from "@/services/axios.service";

const BASE_API = "roles/";
const GETLIST_API = "roles/get-list";
const GETALL_API = "roles/get-all";
const DELETE_API = "roles/delete/";
const RESTORE_API = "roles/restore/";
const REMOVE_API = "roles/remove/";

export const state = {
  listRole: [],
  allRole: [],
};

export const mutations = {
  fetchData(state, newValue) {
    state.listRole = newValue;
  },
  fetchDataAll(state, newValue) {
    state.allRole = newValue;
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
  async getRoles({ commit, dispatch }, queryString) {
    try {
      const res = await systemAxios.get(GETLIST_API + queryString);
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
  async getAllRole({ commit, dispatch }, requestBody) {
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
  async createRole({ commit, dispatch }, requestBody) {
    try {
      const res = await systemAxios.post(BASE_API, requestBody);
      const { data, msg, error } = res.data;
      if (!error) {
        dispatch("notification/success", msg, { root: true });
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
  async editRole({ commit, dispatch }, requestBody) {
    try {
      const res = await systemAxios.put(BASE_API, requestBody);
      const { data, msg, error } = res.data;
      if (!error) {
        dispatch("notification/success", msg, { root: true });
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
  async deleteRole({ commit, dispatch }, id) {
    try {
      const res = await systemAxios.put(DELETE_API + id);
      const { data, msg, error } = res.data;
      if (!error) {
        dispatch("notification/success", msg, { root: true });
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
  async restoreRole({ commit, dispatch }, id) {
    try {
      const res = await systemAxios.put(RESTORE_API + id);
      const { data, msg, error } = res.data;
      if (!error) {
        dispatch("notification/success", msg, { root: true });
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
  async removeRole({ commit, dispatch }, requestBody) {
    try {
      const res = await systemAxios.post(REMOVE_API, requestBody);
      const { data, msg, error } = res.data;
      if (!error) {
        dispatch("notification/success", msg, { root: true });
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

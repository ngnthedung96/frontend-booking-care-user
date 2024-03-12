import { systemAxios } from "@/services/axios.service";

const BASE_API = "permissions/";
const GETLIST_API = "permissions/get-list";
const GETALL_API = "permissions/get-all";
const DELETE_API = "permissions/delete/";
const RESTORE_API = "permissions/restore/";

export const state = {
  listPermission: [],
  allPermission: [],
};

export const mutations = {
  fetchData(state, newValue) {
    state.listPermission = newValue;
  },
  fetchDataAll(state, newValue) {
    state.allPermission = newValue;
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
  async getPermissions({ commit, dispatch }, requestBody) {
    try {
      const res = await systemAxios.post(GETLIST_API, requestBody);
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
  async getAllPermission({ commit, dispatch }, requestBody) {
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
  async createPermission({ commit, dispatch }, requestBody) {
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
  async editPermission({ commit, dispatch }, requestBody) {
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
  async deletePermission({ commit, dispatch }, id) {
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
  async restorePermission({ commit, dispatch }, id) {
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
};

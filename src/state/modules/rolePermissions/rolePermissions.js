import { systemAxios } from "@/services/axios.service";

const BASE_API = "role-permissions/";
const GETLIST_API = "role-permissions/get-list";
const GETALL_API = "role-permissions/get-all";
const DELETE_API = "role-permissions/delete/";
const RESTORE_API = "role-permissions/restore/";

export const state = {
  listRolePer: [],
  allRolePer: [],
  noticeRolePer: {},
};

export const mutations = {
  fetchData(state, newValue) {
    state.listRolePer = newValue;
  },
  fetchDataAll(state, newValue) {
    state.allRolePer = newValue;
  },
  fetchDataNotice(state, newValue) {
    state.noticeRolePer = newValue;
  },
  resetDataNotice(state, newValue) {
    state.noticeRolePer = {};
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
  async getRolePers({ commit, dispatch }, requestBody) {
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
  async getAllRolePer({ commit, dispatch }, requestBody) {
    try {
      commit("resetDataNotice", data);
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
  async createRolePer({ commit, dispatch }, requestBody) {
    try {
      const res = await systemAxios.post(BASE_API, requestBody);
      const { data, msg, error } = res.data;
      if (!error) {
        commit("fetchDataNotice", data);
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
  async editRolePer({ commit, dispatch }, requestBody) {
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
  async deleteRolePer({ commit, dispatch }, id) {
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
  async restoreRolePer({ commit, dispatch }, id) {
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

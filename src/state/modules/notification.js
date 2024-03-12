import app from "../../main";

export const state = {
  typeLable: null,
  typeSnotify: null,
  message: null,
};

export const mutations = {
  success(state, message) {
    state.typeSnotify = "success";
    state.typeLable = "alert-success";
    state.message = message;
    app.config.globalProperties.$notify({ type: "success", text: message });
  },
  error(state, message) {
    state.typeSnotify = "error";
    state.typeLable = "alert-danger";
    app.config.globalProperties.$notify({ type: "error", text: message });
    state.message = message;
  },
  clear(state) {
    state.typeSnotify = null;
    state.typeLable = null;
    state.message = null;
  },
  bindError(state, message) {
    state.typeSnotify = "error";
    state.typeLable = "alert-danger";
    state.message = message;
  },
  bindSuccess(state, message) {
    state.typeSnotify = "success";
    state.typeLable = "alert-success";
    state.message = message;
  },
};

export const actions = {
  success({ commit }, message) {
    commit("success", message);
  },
  error({ commit }, message) {
    commit("error", message);
  },
  clear({ commit }) {
    commit("clear");
  },
  bindError({ commit }, message) {
    commit("bindError", message);
  },
  bindSuccess({ commit }, message) {
    commit("bindSuccess", message);
  },
};

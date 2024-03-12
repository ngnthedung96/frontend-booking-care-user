import router from "../../routers/index";
import tokenService from "@/services/token.service";
import { systemAxios } from "@/services/axios.service";

export const state = {
  currentAdmin: tokenService.getAdmin(),
};

export const actions = {
  // Logs in the user.
  // eslint-disable-next-line no-unused-vars
  async login({ dispatch, commit }, requestData) {
    try {
      const result = await systemAxios.post("/auth/login", requestData);
      const { message, error, data } = result.data;
      if (!error) {
        await tokenService.setAdmin(data);
        dispatch("notification/success", message, { root: true });
        commit("loginSuccess", data);
        setTimeout(() => {
          router.push("/");
        }, 1500);
      } else {
        dispatch("notification/error", message, { root: true });
      }
    } catch (err) {
      if (err.response) {
        dispatch("notification/error", err.response.data.message, {
          root: true,
        });
      }
    }
  },

  // Logout the user
  async logout({ dispatch, commit }) {
    tokenService.removeAdmin();
    try {
      const result = await systemAxios.post("/auth/logout");
      const { msg, error } = result.data;
      if (!error) {
        commit("logout");
        router.push("/login").catch(() => {});
      } else {
        dispatch("notification/error", msg, { root: true });
      }
    } catch (err) {
      commit("logout");
      router.push("/login").catch(() => {});
      if (err.response) {
        dispatch("notification/error", err.response.data.msg, { root: true });
      }
    }
  },

  refreshToken({ commit }, data) {
    tokenService.updateLocalToken(
      data.token,
      data.refreshToken,
      data.adminInfo
    );
    commit("refreshToken", data);
  },
  // register the user
  async registeruser({ dispatch }, user) {
    try {
      const result = await systemAxios.post("/auth/register", user);
      const { message, error } = result.data;
      if (!error) {
        dispatch("notification/success", message, { root: true });
        setTimeout(function () {
          router.push("/dang-nhap");
        }, 1300);
      } else {
        dispatch("notification/error", message, { root: true });
      }
    } catch (err) {
      if (err.response) {
        dispatch("notification/error", err.response.data.message, {
          root: true,
        });
      }
    }
  },
};

export const getters = {
  userId(state) {
    let userId = 0;
    if (state.currentAdmin) {
      userId = state.currentAdmin.userInfor.id;
    }

    return userId;
  },
  loggedIn(state) {
    return state.currentAdmin;
  },
  token(state) {
    let token = "";
    if (state.currentAdmin) {
      token = state.currentAdmin.token;
    } else {
      token = tokenService.getLocalAccessToken();
    }

    return token;
  },
  refreshToken(state) {
    let rftoken = "";
    if (state.currentAdmin) {
      rftoken = state.currentAdmin.refreshToken;
    } else {
      rftoken = tokenService.getLocalRefreshToken();
    }

    return rftoken;
  },
};

export const mutations = {
  loginSuccess(state, data) {
    state.currentAdmin = data;
  },
  logout(state) {
    state.currentAdmin = null;
  },

  refreshToken(state, data) {
    state.currentAdmin = data;
  },
};

import router from "../../router/index";
import tokenService from "@/services/token.service";
import { systemAxios } from "@/services/axios.service";

export const state = {
  currentAdmin: tokenService.getAdmin(),
};
let accounts = JSON.parse(localStorage.getItem("accountsKey")) || [];

export const actions = {
  // Logs in the user.
  // eslint-disable-next-line no-unused-vars
  async login({ dispatch, commit }, { userId, accessToken }) {
    try {
      const result = await systemAxios.post(
        "https://kh.topmove.vn/publicApi/getUser_test.php",
        { user_id: userId }
      );
      const { message, success, data } = result.data;
      if (success) {
        let formattedData = null;
        if (data) {
          if (Array.isArray(data)) {
            formattedData = data[0];
          } else {
            formattedData = data;
          }
        }
        await tokenService.setAdmin({
          adminInfo: { ...formattedData, id: userId },
          token: accessToken,
        });
        commit("loginSuccess", {
          adminInfo: { ...formattedData, id: userId },
          token: accessToken,
        });
        router.push("/");
        dispatch("notification/success", message, { root: true });
      } else {
        dispatch("notification/error", message, { root: true });
      }
    } catch (err) {
      console.log(err, 111);
      if (err.response) {
        dispatch("notification/error", err.response.data.message, {
          root: true,
        });
      }
    }
  },

  // Logout the user
  async logout({ dispatch, commit }, msg) {
    console.log("chay logout");
    tokenService.removeAdmin();
    try {
      commit("logout");
      window.location.href = "https://kh.topmove.vn/dang-nhap";
    } catch (err) {
      commit("logout");
      window.location.href = "https://kh.topmove.vn/dang-nhap";
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
  async registeruser({ dispatch, commit }, user) {
    try {
      const result = await systemAxios.post("/auth/register", user);
      const { msg, error, data } = result.data;
      if (!error) {
        console.log(data);
        commit("registerSuccess", result.data.user);
        dispatch("notification/success", msg, { root: true });
        setTimeout(function () {
          router.push("/login");
        }, 1300);
      } else {
        dispatch("notification/error", msg, { root: true });
      }
    } catch (err) {
      if (err.response) {
        dispatch("notification/error", err.response.data.msg, { root: true });
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
  registerSuccess(state, data) {
    state.currentAdmin = data;
  },
  refreshToken(state, data) {
    state.currentAdmin = data;
  },
};

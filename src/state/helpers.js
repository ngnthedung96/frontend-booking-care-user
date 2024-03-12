import { mapState, mapGetters, mapActions } from "vuex";

export const authComputed = {
  ...mapState("authfack", ["currentUser"]),
  ...mapGetters("authfack", ["loggedIn", "token", "refreshToken"]),
};

export const layoutComputed = {
  ...mapState("layout", {
    layoutType: (state) => state.layoutType,
    leftSidebarType: (state) => state.leftSidebarType,
    layoutWidth: (state) => state.layoutWidth,
    topbar: (state) => state.topbar,
    loader: (state) => state.loader,
  }),
};

export const pmComputed = {
  ...mapState("permissions", ["pmDatas"]),
};
export const pmMethods = {
  ...mapActions("permissions", [
    "getListPm",
    "createPm",
    "updatePm",
    "deletePm",
  ]),
};

export const authMethods = mapActions("auth", [
  "logIn",
  "logInWithPhone",
  "verifyPhone",
  "logOut",
  "register",
  "resetPassword",
]);

export const layoutMethods = mapActions("layout", [
  "changeLayoutType",
  "changeLayoutWidth",
  "changeLeftSidebarType",
  "changeTopbar",
  "changeLoaderValue",
]);

export const authFackMethods = mapActions("authfack", [
  "login",
  "registeruser",
  "logout",
]);

export const notificationMethods = mapActions("notification", [
  "success",
  "error",
  "clear",
]);

export const notifyComputed = {
  ...mapState("notification", ["typeLable", "typeSnotify", "message"]),
};

export const todoComputed = {
  ...mapState("todo", {
    todos: (state) => state.todos,
  }),
};
export const todoMethods = mapActions("todo", ["fetchTodos"]);

// for roles
export const userComputed = {
  ...mapState("users/users", ["userList"]),
  ...mapState("users/userpm", ["userPmDatas"]),
};
export const userMethods = {
  ...mapActions("users/users", ["getListUser", "getListExcel"]),
  ...mapActions("users/userpm", [
    "getListUserPms",
    "createUserPm",
    "updateUserPm",
    "deleteUserPm",
  ]),
};

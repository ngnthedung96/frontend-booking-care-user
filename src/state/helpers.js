import { mapState, mapGetters, mapActions } from "vuex";

export const authComputed = {
  ...mapState("auth", ["currentUser"]),
  ...mapGetters("auth", ["loggedIn", "token", "refreshToken"]),
};

export const authMethods = mapActions("auth", [
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

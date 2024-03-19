import { mapState, mapGetters, mapActions } from "vuex";
import { patientComputed, patientMethods } from "./modules/patients";
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

export const patients = { patientComputed, patientMethods }
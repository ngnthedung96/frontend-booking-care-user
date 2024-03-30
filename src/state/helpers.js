import { mapState, mapGetters, mapActions } from "vuex";
import { patientComputed, patientMethods } from "./modules/patients";
import { clinicComputed, clinicMethods } from "./modules/clinic";
import { specialityComputed, specialityMethods } from "./modules/speciality";
import { doctorComputed, doctorsMethods } from "./modules/doctors";
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

export const clinic = { clinicComputed, clinicMethods }

export const speciality = { specialityComputed, specialityMethods }

export const doctor = { doctorComputed, doctorsMethods }
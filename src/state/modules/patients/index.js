import { mapState, mapActions } from "vuex";

export const patientComputed = {
  ...mapState("patients/patients", ["patientList"]),
};
export const patientMethods = {
  ...mapActions("patients/patients", ["getListpatient", "getListExcel", "updatePatient", "updatePassword"]),
};

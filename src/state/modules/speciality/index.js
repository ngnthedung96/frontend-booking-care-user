import { mapState, mapActions } from "vuex";
export const specialityComputed = {
  ...mapState('speciality/speciality', ["specialityList", "specialityItem"])
}

export const specialityMethods = {
  ...mapActions('speciality/speciality', ["getListSpeciality", "getDetailSpeciality"])
}
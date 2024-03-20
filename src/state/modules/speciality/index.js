import { mapState, mapActions, mapMutations } from "vuex";
export const specialityComputed = {
  ...mapState('speciality/speciality', ["specialityList"])
}

export const specialityMutations = {
  ...mapMutations('speciality/speciality', ["fetchspeciality"])
}

export const specialityMethods = {
  ...mapActions('speciality/speciality', ["getListSpeciality"])
}
import { mapState, mapActions } from 'vuex'
export const clinicComputed = {
  ...mapState('clinic/clinic', ["clinicList", "clinicItem"])
}

export const clinicMethods = {
  ...mapActions('clinic/clinic', ["getListClinic", "getDetailClinic"])
}
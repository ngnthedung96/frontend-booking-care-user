import { mapMutations, mapState, mapActions } from 'vuex'
export const clinicComputed = {
  ...mapState('clinic/clinic', ["clinicList"])
}

export const clinicMutations = {
  ...mapMutations('clinic/clinic', ["fetchClinic"])
}

export const clinicMethods = {
  ...mapActions('clinic/clinic', ["getListClinic"])
}
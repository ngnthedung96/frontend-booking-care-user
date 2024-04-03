import { mapState, mapActions } from 'vuex'
export const doctorComputed = {
  ...mapState('doctors/doctors', ["doctorList", "doctorItem"])
}

export const doctorsMethods = {
  ...mapActions('doctors/doctors', ["getListDoctors", "getDetailDoctor"])
}
<template>
  <main-content>
    <v-container class="px-0 mt-4">
      <div class="d-flex align-center">
        <router-link to="/">
          <v-icon class="text-light-blue-lighten-2">mdi-home</v-icon>
        </router-link>
        <span>/ Bác sĩ nổi bật</span>
      </div>
      <div class="title my-4">Bác sĩ nổi bật</div>
      <div class="list-doctor">
        <doctor-item
            v-for="doctor in doctorList"
            :key="doctor.id"
            :id="doctor.id"
            :name="doctor.name"
            :speciality="doctor.doctorClinicSpeciality"
            >
        </doctor-item>
      </div>
    </v-container>
  </main-content>
</template>

<script>
import { doctor } from "@/state/helpers";
import DoctorItem from "./layout/DoctorItem.vue";
export default {
  components: {
    DoctorItem,
  },
  computed: {
    ...doctor.doctorComputed,
  },
  methods: {
    ...doctor.doctorsMethods,
    initial() {
      this.getDoctors()
    },
    async getDoctors() {
      await this.getListDoctors()
    }
  },
  created() {
    this.initial()
  }
};
</script>

<style scoped>
.v-container {
  max-width: 1200px;
}

.v-icon {
  font-size: 20px;
}

span {
  font-size: 18px;
}

.title {
  font-weight: 600;
}
</style>

<template>
  <div class="mb-6 d-flex flex-row justify-space-between">
    <div class="px-0 v-col-3">
      <h2 style="font-weight: 600">Bác sĩ nổi bật</h2>
    </div>
    <div class="px-0 v-col-2">
      <router-link class="text-decoration-none" to="/">
        <v-btn
          size="large"
          class="bg-teal-lighten-5 text-cyan-accent-4 text-capitalize"
          block
          >Xem thêm</v-btn
        >
      </router-link>
    </div>
  </div>
  <v-sheet
    class="mx-auto"
    max-width="1200"
  >
    <v-slide-group
      class="pa-0"
      selected-class="bg-primary"
      mandatory
      show-arrows
    >
      <v-slide-group-item
        v-for="doctor in doctorList"
        :key="doctor.id"
      >
        <v-card
        class="ma-4"
          color="grey-lighten-1"
          height="200"
          width="260"
        >
          <div class="doctor-name">{{ doctor.name }}</div>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
import { doctor } from '@/state/helpers'
export default {
  computed: {
    ...doctor.doctorComputed
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
}
</script>
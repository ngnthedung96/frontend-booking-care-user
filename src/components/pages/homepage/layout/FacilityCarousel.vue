<template>
  <div class="mb-6 d-flex flex-row justify-space-between">
    <div class="px-0 v-col-3">
      <h2 style="font-weight: 600">Cơ sở y tế</h2>
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
  <v-sheet class="mx-auto" max-width="1200">
    <v-slide-group
      class="pa-0"
      selected-class="bg-primary"
      mandatory
      show-arrows
    >
      <v-slide-group-item v-for="clinic in clinicList" :key="clinic['_id']">
        <router-link :to="'/co-so-y-te/' + clinic.id">
          <v-card
            class="ma-4"
            color="grey-lighten-1"
            height="350"
            width="357.333333333"
          >
            <!-- <img :src="clinic.imageLink" alt=""> -->
            <div>{{ clinic.name }}</div>
          </v-card>
        </router-link>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
import { clinic } from "../../../../state/helpers";
export default {
  computed: {
    ...clinic.clinicComputed,
  },
  methods: {
    ...clinic.clinicMethods,
    initial() {
      this.getClinics();
    },
    async getClinics() {
      await this.getListClinic();
    },
  },
  async created() {
    this.initial();
  },
};
</script>

<style scoped></style>

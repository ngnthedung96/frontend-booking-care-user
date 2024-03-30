<template>
  <main-content>
    <v-container class="px-0 mt-4">
      <div class="d-flex align-center">
        <router-link to="/">
          <v-icon class="text-light-blue-lighten-2">mdi-home</v-icon>
        </router-link>
        <span>/ Cơ sở y tế</span>
      </div>
      <div class="title my-4">Cơ sở y tế</div>
      <div class="list-facility d-flex flex-wrap">
        <facility-item
          v-for="item in clinicList"
          :key="item.id"
          :id="item.id"
          :image="item.imageLink"
          :name="item.name"
        ></facility-item>
      </div>
    </v-container>
  </main-content>
</template>

<script>
import FacilityItem from "./layout/FacilityItem.vue";
import { clinic } from "../../../state/helpers";
export default {
  components: {
    FacilityItem,
  },
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

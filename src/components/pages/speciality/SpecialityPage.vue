<template>
  <main-content>
    <v-container class="px-0 mt-4">
      <div class="d-flex align-center">
        <router-link to="/">
          <v-icon class="text-light-blue-lighten-2">mdi-home</v-icon>
        </router-link>
        <span>/ Chuyên khoa khám</span>
      </div>
      <div class="title my-4">Chuyên khoa khám</div>
      <div class="list-speciality">
        <speciality-item
          v-for="item in specialityList"
          :key="item.id"
          :id="item.id"
          :name="item.name"
        ></speciality-item>
      </div>
    </v-container>
  </main-content>
</template>

<script>
import SpecialityItem from "./layout/SpecialityItem.vue";
import { speciality } from "../../../state/helpers";
export default {
  components: {
    SpecialityItem,
  },
  computed: {
    ...speciality.specialityComputed,
  },
  methods: {
    ...speciality.specialityMethods,
    initial() {
      this.getSpeciality();
    },
    async getSpeciality() {
      await this.getListSpeciality();
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

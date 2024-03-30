<template>
  <main-content>
    <v-container class="px-0 mt-4">
      <div class="d-flex align-center">
        <router-link to="/">
          <v-icon class="text-light-blue-lighten-2">mdi-home</v-icon>
        </router-link>
        <span>/ Khám chuyên khoa</span>
      </div>
      <div class="title my-4">{{ getItem.name }}</div>
      <div class="desc">{{ getItem.description }}</div>
    </v-container>
  </main-content>
</template>

<script>
import { speciality } from "../../../state/helpers";
export default {
  computed: {
    ...speciality.specialityComputed,
    getItem() {
      return this.specialityItem
    }
  },
  methods: {
    ...speciality.specialityMethods,
    async initial() {
      await this.getDetailSpeciality(this.$route.params.specialityId);
    },
  },
  async created() {
    await this.initial();
  },
};
</script>

<style scoped>
.v-container {
  max-width: 1200px;
}
</style>

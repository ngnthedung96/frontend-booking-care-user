<template>
  <main-content>
    <banner-image>
      <v-container class="pa-0">
        <img class="w-100" src="../../../img/homeservice/homeservice.png" alt="" />
      </v-container>
    </banner-image>
    <div class="space-150"></div>
    <v-container>
      <home-examination></home-examination>
      <div class="space"></div>
      <home-doctors></home-doctors>
      <div class="space"></div>
      <remote-examination></remote-examination>
      <div class="space"></div>
      <ask-doctor></ask-doctor>
      <div class="space"></div>
      <live-health></live-health>
    </v-container>
  </main-content>
</template>

<script>
import HomeExamination from './layout/HomeExamination.vue';
import HomeDoctors from './layout/HomeDoctors.vue';
import RemoteExamination from '../homepage/layout/RemoteExamination.vue';
import AskDoctor from '../homepage/layout/AskDoctor.vue';
import LiveHealth from '../homepage/layout/LiveHealth.vue';
export default {
  components: {
    HomeExamination,
    HomeDoctors,
    RemoteExamination,
    AskDoctor,
    LiveHealth
  }
};
</script>

<style scoped>
.v-container {
  max-width: 1200px;
}
.w-100 {
  border-radius: 30px;
}

.space-150 {
  height: 150px;
}

.space {
  height: 50px;
}
</style>

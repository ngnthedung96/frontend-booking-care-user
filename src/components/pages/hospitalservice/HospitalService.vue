<template>
  <main-content>
    <banner-image>
      <v-container class="pa-0">
        <img class="w-100" src="../../../img/hospital/hospita.png" alt="" />
      </v-container>
    </banner-image>
    <div class="space-150"></div>
    <v-container>
      <for-user></for-user>
      <div class="space"></div>
      <speciality-carousel></speciality-carousel>
      <div class="space"></div>
      <facility-carousel></facility-carousel>
    </v-container>
    <div class="space"></div>
    <div class="highlight">
      <img class="w-100" src="../../../img/background-light-blue.png" alt="" />
      <v-container class="doctor-list">
        <doctor-list></doctor-list>
      </v-container>
    </div>
    <div class="space"></div>
    <v-container>
      <examination-package></examination-package>
      <div class="space"></div>
      <have-test></have-test>
    </v-container>
    <div class="space"></div>
    <div class="highlight">
      <img class="w-100" src="../../../img/background-light-blue.png" alt="" />
      <v-container class="doctor-list">
        <have-scan></have-scan>
      </v-container>
    </div>
    <div class="space"></div>
    <v-container>
      <have-endoscopic></have-endoscopic>
      <div class="space"></div>
      <have-surgery></have-surgery>
      <div class="space"></div>
      <booking-suggest></booking-suggest>
    </v-container>
    <div class="space"></div>
    <div class="highlight">
      <img class="w-100" src="../../../img/background-music.png" alt="">
      <v-container class="doctor-list">
        <mental-health></mental-health>
      </v-container>
    </div>
    <div class="space"></div>
    <v-container>
      <hand-book></hand-book>
      <div class="space"></div>
    </v-container>
  </main-content>
</template>

<script>
import ForUser from "../homepage/layout/ForUser.vue";
import SpecialityCarousel from "../homepage/layout/SpecialityCarousel.vue";
import FacilityCarousel from "../homepage/layout/FacilityCarousel.vue";
import DoctorList from "../homepage/layout/DoctorList.vue";
import ExaminationPackage from "./layout/ExaminationPackage.vue";
import HaveTest from "./layout/HaveTest.vue";
import HaveEndoscopic from "./layout/HaveEndoscopic.vue";
import HaveScan from "./layout/HaveScan.vue";
import HaveSurgery from "./layout/HaveSurgery.vue";
import BookingSuggest from "../homepage/layout/BookingSuggest.vue";
import MentalHealth from "../homepage/layout/MentalHealth.vue";
import HandBook from "../homepage/layout/HandBook.vue";
export default {
  components: {
    ForUser,
    SpecialityCarousel,
    FacilityCarousel,
    DoctorList,
    ExaminationPackage,
    HaveTest,
    HaveScan,
    HaveEndoscopic,
    HaveSurgery,
    BookingSuggest,
    MentalHealth,
    HandBook
  },
};
</script>

<style scoped>
.v-container {
  max-width: 1200px;
}

.v-carousel {
  border-radius: 30px;
}

.space-150 {
  height: 150px;
}

.space {
  height: 50px;
}

.w-100 {
  border-radius: 30px;
}

.w-100 {
  max-height: 100%;
}

.highlight {
  position: relative;
  height: 450px;
}

.doctor-list {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
}
</style>

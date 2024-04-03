<template>
  <main-content>
    <banner-image>
      <v-container class="pa-0">
        <v-carousel>
          <v-carousel-item>
            <img class="w-100" src="../../../img/home/home1.png" alt="" />
          </v-carousel-item>
          <v-carousel-item>
            <img class="w-100" src="../../../img/home/home2.png" alt="" />
          </v-carousel-item>
          <v-carousel-item>
            <img class="w-100" src="../../../img/home/home3.jpg" alt="" />
          </v-carousel-item>
          <v-carousel-item>
            <img class="w-100" src="../../../img/home/home4.png" alt="" />
          </v-carousel-item>
        </v-carousel>
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
    <div class="space-150"></div>
    <v-container>
      <social-media></social-media>
    </v-container>
  </main-content>
</template>

<script>
import ForUser from "./layout/ForUser.vue";
import DoctorList from "./layout/DoctorList.vue";
import SpecialityCarousel from "./layout/SpecialityCarousel.vue";
import FacilityCarousel from "./layout/FacilityCarousel.vue";
import SocialMedia from "./layout/SocialMedia.vue"
export default {
  components: {
    ForUser,
    FacilityCarousel,
    SpecialityCarousel,
    DoctorList,
    SocialMedia
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

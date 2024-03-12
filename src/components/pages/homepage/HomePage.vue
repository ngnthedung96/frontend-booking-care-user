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
      <comprehensive-service></comprehensive-service>
      <div class="space"></div>
      <content-slider>
        <template #home="slotProps">
          <carousel-layout :big-title="slotProps.title"></carousel-layout>
          <div class="carousel">
            <v-slide-group mandatory show-arrows>
              <slider-item
                v-for="slider in slotProps.item"
                :key="slider.title"
                :image="slider.img"
                :title="slider.title"
              ></slider-item>
            </v-slide-group>
          </div>
        </template>
      </content-slider>
    </v-container>
    <div class="space"></div>
    <doctor-list></doctor-list>
  </main-content>
</template>

<script>
import ForUser from "../../content/ForUser.vue";
import ComprehensiveService from "./layout/ComprehensiveService.vue";
// import FaciliateComprehensive from "../layout/FaciliateComprehensive.vue";
import DoctorList from "../../doctors/DoctorList.vue";
import ContentSlider from "../../content/ContentSlider.vue";
import SliderItem from "../../content/SliderItem.vue";
import CarouselLayout from "../../content/CarouselLayout.vue";
export default {
  components: {
    ForUser,
    ComprehensiveService,
    // FaciliateComprehensive,
    DoctorList,
    ContentSlider,
    SliderItem,
    CarouselLayout,
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
</style>

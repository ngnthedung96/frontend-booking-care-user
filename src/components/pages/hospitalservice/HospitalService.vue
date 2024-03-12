<template>
  <main-content>
    <banner-image>
      <img class="w-100" src="../../../img/hospital/hospita.png" alt="" />
    </banner-image>
    <div class="space"></div>
    <v-container>
      <for-user></for-user>
      <div class="space"></div>
      <content-slider>
        <template #hospital="slotProps">
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
import DoctorList from "../../doctors/DoctorList.vue";
import SliderItem from "../../content/SliderItem.vue";
import ContentSlider from "../../content/ContentSlider.vue";
import CarouselLayout from "../../content/CarouselLayout.vue";
export default {
  components: {
    ForUser,
    SliderItem,
    ContentSlider,
    DoctorList,
    CarouselLayout,
  },
};
</script>

<style scoped>
.w-100 {
  border-radius: 30px;
}

.space {
  height: 150px;
}
</style>../../content/CarouselLayout.vue../../content/ContentSlider.vue../../content/ForUser.vue../../content/SliderItem.vue

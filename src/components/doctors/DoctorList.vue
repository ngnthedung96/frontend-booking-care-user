<template>
  <section>
    <div>
      <img class="w-100" src="../../img/background-light-blue.png" alt="" />
    </div>
    <v-container>
      <carousel-layout></carousel-layout>
      <div class="carousel">
        <v-slide-group mandatory show-arrows>
          
        </v-slide-group>
      </div>
    </v-container>
  </section>
</template>

<script>
import CarouselLayout from "../content/CarouselLayout.vue";
export default {
  components: {
    CarouselLayout,
  },
  computed: {
    getDoctors() {
      return this.$store.getters['doctors/getDoctors']
    }
  }
};
</script>

<style scoped>
.w-100 {
  height: 530px;
  object-fit: cover;
}

section {
  position: relative;
}

.v-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
}
</style>../content/CarouselLayout.vue../content/CarouselLayout.vue

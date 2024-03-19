<template>
  <div class="bg-light-blue-lighten-5"></div>
  <v-container class="d-flex justify-center">
    <div class="img">
      <slot></slot>
    </div>
  </v-container>
</template>

<style scoped>
.v-container {
  max-width: 1200px;
}
.bg-light-blue-lighten-5 {
  height: 45vh;
}

.img {
  position: absolute;
  top: 100px;
}

</style>

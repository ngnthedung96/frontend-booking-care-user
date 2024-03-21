<template>
  <div class="bg-light-blue-lighten-5"></div>

  <div class="img">
    <slot></slot>
  </div>
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
  width: 100%;
}
</style>

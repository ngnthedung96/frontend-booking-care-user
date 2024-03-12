<template>
  <div class="ma-4">
    <div class="pa-6 d-flex flex-column justify-center">
      <div class="img-height">
        <img src="../../img/mental.png" alt="">
      </div>
      <span class="mt-4">{{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title', 'image']
}
</script>

<style scoped>
.d-flex {
  width: 323px;
  border: 2px solid #ccc;
  border-radius: 10px;
}

img {
  width: 100%;
}

span {
  text-align: center;
  font-size: 18px;
  font-weight: 600;
}
</style>
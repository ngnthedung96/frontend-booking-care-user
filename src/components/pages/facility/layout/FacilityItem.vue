<template>
  <router-link :to="/co-so-y-te/ + id" class="item pa-3 text-black">
    <div class="img pa-3">{{ image }}</div>
    <div class="item-clinic">
      {{ name }}
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['id', 'image', 'name']
}
</script>

<style scoped>
.item {
  text-decoration: none;
  width: 270px;
}

.item-clinic {
  text-align: center;
}

.img {
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 20px;
}

</style>
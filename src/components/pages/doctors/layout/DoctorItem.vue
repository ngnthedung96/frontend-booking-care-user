<template>
    <router-link :to="'/bac-si-noi-bat/' + id" class="item pa-3 d-flex text-black">
        <div class="title">{{ name }}</div>
    </router-link>
</template>

<script>
export default {
  props: ['name', 'id']
}
</script>

<style scoped>
.item {
  text-decoration: none;
  border-bottom: 1px solid #ccc;
}
</style>
<template>
  <div class="mb-4 d-flex flex-row justify-space-between">
    <div class="px-0 v-col-3">
      <h2 style="font-weight: 600">{{ bigTitle }}</h2>
    </div>
    <div class="px-0 v-col-2">
      <router-link class="text-decoration-none" to="/">
        <v-btn
          size="x-large"
          class="bg-teal-lighten-5 text-cyan-accent-4 text-capitalize"
          block
          >Xem thêm</v-btn
        >
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['bigTitle'],
}
</script>
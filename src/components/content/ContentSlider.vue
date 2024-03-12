<template>
  <section v-for="(content, index) in getContent" :key="content">
    <div>
      <slot name="home" :item="content.slider" :title="content.bigTitle"></slot>
    </div>
    <div v-if="index != 2">
      <slot name="hospital" :item="content.slider" :title="content.bigTitle"></slot>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    getContent() {
      return this.$store.getters['contentSlider/homeContent']
    },
  },
}
</script>
<template>
  <the-header></the-header>
  <div class="layout">
    <slot></slot>
  </div>
</template>

<script>
import TheHeader from '../nav/TheHeader.vue'
export default {
  components: {
    TheHeader
  }
}
</script>
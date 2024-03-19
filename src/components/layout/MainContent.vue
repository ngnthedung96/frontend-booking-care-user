<template>
  <the-header></the-header>
  <div class="layout">
    <slot></slot>
  </div>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from '../nav/TheHeader.vue'
import TheFooter from '../nav/TheFooter.vue';
export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>
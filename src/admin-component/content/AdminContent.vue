<template>
  <main class="d-flex">
    <navigation-bar></navigation-bar>
    <div class="w-100 right-content">
      <admin-header></admin-header>
      <div class="layout">
        <slot></slot>
      </div>
    </div>
  </main>
</template>

<script>
import NavigationBar from "../nav/NavigationBar.vue";
import AdminHeader from "../nav/AdminHeader.vue";
export default {
  components: {
    NavigationBar,
    AdminHeader
  },
};
</script>

<style scoped>
.v-application {
  max-width: 250px;
}

.right-content {
    margin-left: 260px;
}
</style>

<template>
  <notifications position="top right" />
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  data() {
    return {
      authPage: false,
    };
  },
  computed: {
    headerVisible() {
      if (this.getPath === "/dang-nhap") {
        this.authPage === true;
      }
      return this.authPage;
    },
  },
};
</script>

<style>
* {
  font-family: Montserrat, sans-serif !important;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

main {
  position: relative;
}
</style>

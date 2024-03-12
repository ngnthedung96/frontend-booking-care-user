<template>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  data() {
    return {
      authPage: false
    }
  },
  computed: {
    headerVisible() {
      if (this.getPath === '/dang-nhap') {
        this.authPage === true
      }
      return this.authPage 
    }
  },
  methods: {
    getPath(path) {
      console.log(path)
      return path
    }
  }
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

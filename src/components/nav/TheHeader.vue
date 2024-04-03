<template>
  <header>
    <nav class="bg-light-blue-lighten-5">
      <v-container class="white pa-0 mt-2 d-block">
        <v-row class="d-flex align-center">
          <div class="v-col-3 pa-0">
            <ul class="d-flex flex-row">
              <li class="pl-0 v-col-2">
                <v-icon color="grey-darken-1" style="font-size: 50px"
                  >mdi-menu</v-icon
                >
              </li>
              <li class="v-col-10">
                <router-link to="/">
                  <img src="../../img/logo.png" alt="" />
                </router-link>
              </li>
            </ul>
          </div>
          <div class="v-col-7 d-flex flex-row pa-0">
            <div class="v-col-7 pa-0 d-flex align-center">
              <ul class="d-flex flex-row font">
                <li @click="currentPath" class="v-col-auto d-flex pa-0">
                  <router-link class="text-decoration-none text-black" to="/"
                    >Tất cả</router-link
                  >
                </li>
                <li @click="currentPath" class="v-col-auto d-flex pa-0">
                  <router-link
                    class="text-decoration-none text-black"
                    to="/chuyen-khoa"
                    >Chuyên khoa</router-link
                  >
                </li>
                <li @click="currentPath" class="v-col-auto d-flex pa-0">
                  <router-link
                    class="text-decoration-none text-black"
                    to="/co-so-y-te"
                    >Cơ sở y tế</router-link
                  >
                </li>
              </ul>
            </div>
            <div class="v-col-5 pa-0">
              <router-link class="text-decoration-none" to="/tim-kiem">
                <div class="d-flex flex-row bg-white">
                  <v-icon
                    class="align-self-center ml-2"
                    style="font-size: 25px"
                    color="black"
                    >mdi-magnify</v-icon
                  >
                  <span
                    class="v-col-auto align-self-center"
                    style="font-size: 15px"
                    >Tìm kiếm</span
                  >
                </div>
              </router-link>
            </div>
          </div>
          <div class="v-col-2 pa-0">
            <div class="v-col-12 pa-0 d-flex justify-end">
              <ul class="d-flex flex-row align-center justify-end">
                <li @click="currentPath" class="mr-3">
                  <router-link class="text-decoration-none" to="/lich-hen">
                    <div class="d-flex flex-column">
                      <v-icon
                        class="mx-auto text-cyan-accent-4"
                        style="font-size: 30px"
                        >mdi-clock-outline</v-icon
                      >
                      <span
                        class="text-cyan-accent-4"
                        style="font-size: 14px; font-weight: bold"
                        >Lịch hẹn</span
                      >
                    </div>
                  </router-link>
                </li>
                <li v-if="!isLoggedIn">
                  <router-link @click="currentPath" class="text-decoration-none" to="/dang-nhap">
                    <div class="d-flex flex-column">
                    <v-icon
                      class="mx-auto text-cyan-accent-4"
                      style="font-size: 30px"
                      >mdi-login</v-icon
                    >
                    <span
                      class="text-cyan-accent-4"
                      style="font-size: 14px; font-weight: bold"
                      >Đăng nhập</span
                    >
                    </div>
                  </router-link>
                </li>
                <li v-else>
                  <div class="v-col-12">
                    <img class="img" @mouseover="showUp = true" src="../../img/doctor/avatar.jpg" alt="">
                    <div @mouseleave="showUp = false" v-show="showUp" class="subnav bg-grey-lighten-5">
                      <li class="btn pa-2">
                        <router-link to="/tai-khoan">
                          <button>Tài khoản</button>
                        </router-link>
                      </li>
                      <li class="btn pa-2">
                        <button @click="logOut">Đăng xuất</button>
                      </li>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </v-row>
      </v-container>
    </nav>
  </header>
</template>

<script>
import { authComputed, authMethods } from '@/state/helpers'
export default {
  data() {
    return {
      showUp: false
    }
  },
  computed: {
    ...authComputed,
    isLoggedIn() {
      return this.currentUser ? this.currentUser : null
    }
  },
  methods: {
    ...authMethods,
    currentPath() {
      this.$emit('send-path', this.$route.path)
    },
    logOut() {
      this.logout()
    }
  },
}
</script>

<style scoped>
.v-container {
  max-width: 1200px;
}
.font {
  font-size: 18px;
}

ul {
  list-style-type: none;
}

.bg-white {
  border-radius: 30px;
}

img {
  height: 48px;
}

.text-decoration-none {
  padding: 12px;
}

.text-black.text-decoration-none.router-link-active {
  border-radius: 25px;
  background-color: rgb(255, 196, 25);
  color: rgb(255, 243, 209) !important;
  font-weight: bolder;
}

.img {
  border-radius: 50%;
}

.subnav {
  position: absolute;
  min-width: 120px;
  z-index: 1;
}

button {
  text-align: center;
}

.btn + .btn {
  border-top: 1px solid #ccc;
}
</style>

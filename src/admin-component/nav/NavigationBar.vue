<template>
    <v-app>
      <v-navigation-drawer>
      <div class="navigation h-100 px-4 pt-4 bg-blue-grey-darken-3">
        <div class="image pa-3">
          <img src="../../img/logo.png" alt="" />
        </div>
        <div class="dashboard pa-3">
          <v-icon>mdi-view-dashboard</v-icon>
          <span class="ml-3">Trang quản trị</span>
        </div>
        <div class="nav pa-3 mt-3">
          <div class="home-admin py-3">
            <router-link class="home text-decoration-none text-white" to="/admin">
              <v-icon>mdi-home</v-icon>
              <span class="ml-3">Trang chủ</span>
            </router-link>
          </div>
          <div class="home-admin py-3">
            <router-link class="home text-decoration-none text-white" to="/admin/tai-khoan">
              <v-icon>mdi-home</v-icon>
              <span class="ml-3">Tài khoản</span>
            </router-link>
          </div>
          <div class="home-admin py-3">
            <router-link class="home text-decoration-none text-white" to="/admin/chuyen-khoa">
              <v-icon>mdi-home</v-icon>
              <span class="ml-3">Chuyên khoa</span>
            </router-link>
          </div>
          <div class="home-admin py-3">
            <router-link class="home text-decoration-none text-white" to="/admin/co-so-y-te">
              <v-icon>mdi-home</v-icon>
              <span class="ml-3">Cơ sở y tế</span>
            </router-link>
          </div>
          <div class="home-admin py-3">
            <router-link class="home text-decoration-none text-white" to="/admin/bac-si">
              <v-icon>mdi-home</v-icon>
              <span class="ml-3">Bác sĩ</span>
            </router-link>
          </div>
        </div>
      </div>
    </v-navigation-drawer>
    </v-app>
</template>

<style scoped>
.image {
  width: 100%;
  border-bottom: 1px solid #ccc;
}

img {
  width: 100%;
}

.dashboard {
  border-bottom: 1px solid #ccc;
}
</style>

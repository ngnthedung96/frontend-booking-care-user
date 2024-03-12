<template>
  <h2 class="mb-3" style="font-weight: 600">Dịch vụ chuyên khoa</h2>
  <section class="v-col-12 d-flex justify-center pa-0">
    <div class="v-col-12 pa-0">
      <div class="v-col-12 d-flex flex-row pa-0">
        <div class="v-col-6 pl-0">
          <div
            class="d-flex flex-column pl-0 v-col-auto text-decoration-none text-black"
            to="/"
          >
            <router-link class="pa-6 text-decoration-none" to="/">
              <div class="d-flex align-items-center">
                <v-icon color="light-blue-darken-3" class="font"
                  >mdi-hospital-building</v-icon
                >
                <span class="text-grey-darken-4 fs ml-15">Khám chuyên khoa</span>
              </div>
            </router-link>

            <router-link class="pa-6 text-decoration-none" to="/">
              <div class="d-flex align-items-center">
                <v-icon color="light-blue-darken-3" class="font"
                  >mdi-human-male-height</v-icon
                >
                <span class="text-grey-darken-4 fs ml-15">Khám tổng quát</span>
              </div>
            </router-link>

            <router-link class="pa-6 text-decoration-none" to="/">
              <div class="d-flex align-items-center">
                <v-icon color="light-blue-darken-3" class="font"
                  >mdi-account-heart-outline</v-icon
                >
                <span class="text-grey-darken-4 fs ml-15">Sức khỏe tinh thần</span>
              </div>
            </router-link>

            <router-link class="pa-6 text-decoration-none" to="/">
              <div class="d-flex align-items-center">
                <v-icon color="light-blue-darken-3" class="font"
                  >mdi-clipboard-pulse-outline</v-icon
                >
                <span class="text-grey-darken-4 fs ml-15">Gói Phẫu thuật</span>
              </div>
            </router-link>

            <router-link class="pa-6 text-decoration-none" to="/">
              <div class="d-flex align-items-center">
                <v-icon color="light-blue-darken-3" class="font"
                  >mdi-medication-outline</v-icon
                >
                <span class="text-grey-darken-4 fs ml-15">Bài test Sức khỏe</span>
              </div>
            </router-link>
          </div>
        </div>
        <div class="v-col-6 pr-0">
          <ul
            class="d-flex flex-column pr-0 v-col-auto text-decoration-none text-black"
            to="/"
          >
          <router-link class="pa-6 text-decoration-none" to="/">
              <div class="d-flex align-items-center">
                <v-icon color="light-blue-darken-3" class="font"
                  >mdi-cellphone-sound</v-icon
                >
                <span class="text-grey-darken-4 fs ml-15">Khám từ xa</span>
              </div>
            </router-link>

            <router-link class="pa-6 text-decoration-none" to="/">
              <div class="d-flex align-items-center">
                <v-icon color="light-blue-darken-3" class="font"
                  >mdi-test-tube</v-icon
                >
                <span class="text-grey-darken-4 fs ml-15">Xét nghiệm y học</span>
              </div>
            </router-link>

            <router-link class="pa-6 text-decoration-none" to="/">
              <div class="d-flex align-items-center">
                <v-icon color="light-blue-darken-3" class="font"
                  >mdi-tooth</v-icon
                >
                <span class="text-grey-darken-4 fs ml-15">Khám nha khoa</span>
              </div>
            </router-link>

            <router-link class="pa-6 text-decoration-none" to="/">
              <div class="d-flex align-items-center">
                <v-icon color="light-blue-darken-3" class="font"
                  >mdi-blood-bag</v-icon
                >
                <span class="text-grey-darken-4 fs ml-15">Sức khỏe Tiểu đường</span>
              </div>
            </router-link>

            <router-link class="pa-6 text-decoration-none" to="/">
              <div class="d-flex align-items-center">
                <v-icon color="light-blue-darken-3" class="font"
                  >mdi-hospital-box</v-icon
                >
                <span class="text-grey-darken-4 fs ml-15">Y tế gần bạn</span>
              </div>
            </router-link>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.font {
  font-size: 50px;
}

.pa-6 {
  border: 2px solid #ccc;
  border-radius: 20px;
}

.pa-6 + .pa-6 {
  margin-top: 40px;
}

.fs {
  font-size: 25px;
  line-height: 50px;
}
</style>

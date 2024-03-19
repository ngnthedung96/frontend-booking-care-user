<template>
  <footer>
    <!-- <div class="bg-grey-lighten-3">
      <v-container>
        <v-row class="v-col-12">
          <div class="v-col-5">
            <div class="info">
              <div class="title mb-2" style="font-weight: 600">
                Công ty Cổ phần Công nghệ BookingCare
              </div>
              <div class="location d-flex mb-2">
                <v-icon>mdi-map-marker</v-icon>
                <div class="address font">
                  Lô B4/D21, Khu đô thị mới Cầu Giấy, Phường Dịch Vọng Hậu, Quận
                  Cầu Giấy, Thành phố Hà Nội, Việt Nam
                </div>
              </div>
              <div class="check d-flex mb-2">
                <v-icon>mdi-check-decagram-outline</v-icon>
                <div class="check-info font">
                  ĐKKD số. 0106790291. Sở KHĐT Hà Nội cấp ngày 16/03/2015
                </div>
              </div>
              <div class="phone d-flex mb-2">
                <v-icon>mdi-phone</v-icon>
                <div class="number font">024-7301-2468 (7h30 - 18h)</div>
              </div>
              <div class="mail d-flex mb-4">
                <v-icon>mdi-email-outline</v-icon>
                <div class="mail-info font">
                  support@bookingcare.vn (7h30 - 18h)
                </div>
              </div>
              <div class="title-2 mb-2" style="font-weight: 600">
                Văn phòng tại TP Hồ Chí Minh
              </div>
              <div class="location d-flex mb-2">
                <v-icon>mdi-map-marker</v-icon>
                <div class="address-2 font">
                  Số 01, Hồ Bá Kiện, Phường 15, Quận 10
                </div>
              </div>
            </div>
          </div>
          <div class="v-col-3">
            <img class="v-col-8 pa-0" src="../../img/logo.png" alt="" />
            <ul class="list">
              <li class="list-item">
                <router-link to="/">Tuyển dụng</router-link>
              </li>
              <li class="list-item">
                <router-link to="/">Chính sách bảo mật</router-link>
              </li>
              <li class="list-item">
                <router-link to="/">Quy chế hoạt động</router-link>
              </li>
              <li class="list-item">
                <router-link to="/">Liên hệ hợp tác</router-link>
              </li>
              <li class="list-item">
                <router-link to="/">Điều khoản sử dụng</router-link>
              </li>
              <li class="list-item">
                <router-link to="/">Câu hỏi thường gặp</router-link>
              </li>
            </ul>
          </div>
          <div class="v-col-4">
            <div class="partner">
              <div class="title-partner mb-3" style="font-weight: 600">
                Đối tác bảo trợ nội dung
              </div>
              <ul>
                <li class="mb-4">
                  <a class="d-flex partner-link" href="#">
                    <img
                      class="v-col-3 pa-0"
                      src="../../img/home/home1.png"
                      alt=""
                    />
                    <div class="ml-2 content">
                      <div class="title-content">Hello Doctor</div>
                      <div class="desc">
                        Bảo trợ chuyên mục nội dung "Sức khỏe tinh thần"
                      </div>
                    </div>
                  </a>
                </li>
                <li class="mb-4">
                  <a class="d-flex partner-link" href="#">
                    <img
                      class="v-col-3 pa-0"
                      src="../../img/home/home1.png"
                      alt=""
                    />
                    <div class="ml-2 content">
                      <div class="title-content">Hello Doctor</div>
                      <div class="desc">
                        Bảo trợ chuyên mục nội dung "Sức khỏe tinh thần"
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a class="d-flex partner-link" href="#">
                    <img
                      class="v-col-3 pa-0"
                      src="../../img/home/home1.png"
                      alt=""
                    />
                    <div class="ml-2 content">
                      <div class="title-content">Hello Doctor</div>
                      <div class="desc">
                        Bảo trợ chuyên mục nội dung "Sức khỏe tinh thần"
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </v-row>
        <div class="download d-flex my-6">
          <v-icon>mdi-cellphone</v-icon>
          <p>Tải ứng dụng BookingCare cho điện thoại hoặc máy tính bảng</p>
        </div>
      </v-container>
    </div>
    <div class="bg-light-blue-lighten-2">
      <v-container>
        <div class="py-2 d-flex justify-space-between">
          <div class="source text-white">2024 BookingCare</div>
          <div class="social d-flex">
            <v-icon class="text-light-blue-darken-4" style="font-size: 35px;">mdi-facebook</v-icon>
            <v-icon style="font-size: 35px;">mdi-twitter</v-icon>
            <v-icon class="text-deep-purple-darken-4" style="font-size: 35px;">mdi-twitch</v-icon>
          </div>
        </div>
      </v-container>
    </div> -->
  </footer>
</template>

<style scoped>
.v-container {
  max-width: 1200px;
}

.v-row {
  border-bottom: 1px solid #ccc;
}

.font {
  font-size: 13px;
}

.v-icon {
  margin-right: 5px;
}

li {
  list-style: none;
}

.list-item a {
  text-decoration: none;
  color: #45c3d2;
  font-size: 16px;
}

.list-item + .list-item {
  margin-top: 10px;
}

.partner-link {
  text-decoration: none;
}

.title-content {
  color: black;
  font-size: 15px;
  font-weight: 600;
}

.desc {
  font-size: 14px;
  color: black;
}

.download {
  font-size: 14px;
}

.source {
  font-size: 12px;
}
</style>

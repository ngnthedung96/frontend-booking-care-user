<template>
  <main-content>
    <div class="banner-page">
      <div class="banner">
        <img
          class="w-100 mt-3 img-banner"
          src="../../../img/homeservice/homeservice.png"
          alt=""
        />
      </div>
      <v-container class="hospital-info">
        <div class="hospital d-flex">
          <div class="v-col-2">
            <img
              class="hospital-img w-100"
              src="../../../img/hospital/hospita.png"
              alt=""
            />
          </div>
          <div class="v-col-10">
            <div class="hospital-name">{{ getItem.name }}</div>
            <div class="hospital-address">
              {{ getItem.address }}
            </div>
          </div>
        </div>
      </v-container>
    </div>
    <v-container>
      <div class="desc-box mb-5 pa-4 bg-lime-lighten-3">
        <div class="desc">
          BookingCare là Nền tảng Y tế chăm sóc sức khỏe toàn diện hàng đầu Việt
          Nam kết nối người dùng với trên 200 bệnh viện - phòng khám uy tín, hơn
          1,500 bác sĩ chuyên khoa giỏi và hàng nghìn dịch vụ, sản phẩm y tế
          chất lượng cao.
        </div>
      </div>
      <div class="patient-action pa-4 mb-10 bg-cyan-lighten-4">
        <div class="text">
          Từ nay, người bệnh có thể đặt lịch tại Khu khám bệnh theo yêu cầu,
          Bệnh viện Hữu nghị Việt Đức thông qua hệ thống đặt khám BookingCare.
        </div>
        <ul class="mt-3 ml-7">
          <li>
            Được lựa chọn các giáo sư, tiến sĩ, bác sĩ chuyên khoa giàu kinh
            nghiệm
          </li>
          <li>
            Hỗ trợ đặt khám trực tuyến trước khi đi khám (miễn phí đặt lịch)
          </li>
          <li>
            Giảm thời gian chờ đợi khi làm thủ tục khám và ưu tiên khám trước
          </li>
          <li>Nhận được hướng dẫn chi tiết sau khi đặt lịch</li>
        </ul>
      </div>
      <div class="about">
        <div class="about-heading">Giới thiệu</div>
        <div class="about-text">{{ getItem.introduce }}</div>
      </div>
      <div class="strength">
        <div class="strength-heading">Thế mạnh chuyên môn</div>
        <div class="strength-text">{{ getItem.strength }}</div>
      </div>
      <div class="equipment">
        <div class="equipment-heading">Trang thiết bị</div>
        <div class="equipment-text">{{ getItem.equipment }}</div>
      </div>
      <div class="location">
        <div class="location-heading">Vị trí</div>
        <div class="location-text"></div>
      </div>
      <div class="progress">
        <div class="progress-heading">Quy trình khám</div>
        <div class="progress-text">{{ getItem.process }}</div>
      </div>
    </v-container>
  </main-content>
</template>

<script>
export default {
  computed: {
    getItem() {
      return this.$store.state.clinic.clinic.clinicItem
    }
  },
  created() {
    this.$store.dispatch("clinic/clinic/getDetailClinic", this.$route.params.facilityId)
  }
}
</script>

<style scoped>
.banner-page {
  position: relative;
}

.v-container {
  max-width: 1200px;
}

.hospital-info {
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
}

.hospital {
  border: 1px solid #ccc;
  background-color: rgba(250, 250, 250, 0.7);
}

.img-banner {
  object-fit: cover;
  max-height: 40vh;
}

.hospital-name {
  font-size: 28px;
  font-weight: 500;
}
</style>

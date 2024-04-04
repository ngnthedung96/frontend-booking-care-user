<template>
  <main-content>
    <v-container class="px-0 mt-4">
      <div class="d-flex align-center">
        <router-link to="/">
          <v-icon class="text-light-blue-lighten-2">mdi-home</v-icon>
        </router-link>
        <span>/ Khám chuyên khoa</span>
      </div>
      <div class="v-col-7 d-flex">
        <div class="v-col-3 w-100">
          <img class="w-100" src="../../../img/doctor/avatar.jpg" alt="" />
        </div>
        <div class="v-col-9">
          <div class="name">Bác sĩ {{ getItem.name }}</div>
          <p>Hơn 20 năm kinh nghiệm trong lĩnh vực Phổi và Lao</p>
          <p>Từng công tác nhiều năm tại Bệnh viện Phạm Ngọc Thạch</p>
          <p>BÁC SĨ NHẬN KHÁM BỆNH NHÂN TỪ 16 TUỔI TRỞ LÊN</p>
        </div>
      </div>
      <div class="select-day mb-3 v-col-1 d-flex justify-center">
        <select class="px-2" name="day" id="day">
          <option :value="`${getNextDay.getDate()}/${getNextDay.getMonth()}`">
            {{ getNextDay.getDate() }} / {{ getNextDay.getMonth() }}
          </option>
          <option
            :value="`${getTwoDaysLater.getDate()}/${getTwoDaysLater.getMonth()}`"
          >
            {{ getTwoDaysLater.getDate() }} / {{ getTwoDaysLater.getMonth() }}
          </option>
          <option
            :value="`${getThreeDaysLater.getDate()}/${getThreeDaysLater.getMonth()}`"
          >
            {{ getThreeDaysLater.getDate() }} /
            {{ getThreeDaysLater.getMonth() }}
          </option>
          <option
            :value="`${getFourDaysLater.getDate()}/${getFourDaysLater.getMonth()}`"
          >
            {{ getFourDaysLater.getDate() }} / {{ getFourDaysLater.getMonth() }}
          </option>
        </select>
        <v-icon>mdi-chevron-down</v-icon>
      </div>
      <div class="info d-flex">
        <div class="v-col-7 date">
        <div class="title-calendar mb-2 d-flex align-center">
          <v-icon>mdi-calendar-clock</v-icon>
          <div class="ml-1 calendar">LỊCH KHÁM</div>
        </div>
        <div class="hour d-flex flex-wrap">
          <router-link :to="'/dat-lich-kham/' + getItem.id">
            <button class="bg-grey-lighten-2 ma-1 pa-4">08:00 - 08:30</button>
          </router-link>
          <router-link :to="'/dat-lich-kham/' + getItem.id">
            <button class="bg-grey-lighten-2 ma-1 pa-4">08:00 - 08:30</button>
          </router-link>
          <router-link :to="'/dat-lich-kham/' + getItem.id">
            <button class="bg-grey-lighten-2 ma-1 pa-4">08:00 - 08:30</button>
          </router-link>
          <router-link :to="'/dat-lich-kham/' + getItem.id">
            <button class="bg-grey-lighten-2 ma-1 pa-4">08:00 - 08:30</button>
          </router-link>
          <router-link :to="'/dat-lich-kham/' + getItem.id">
            <button class="bg-grey-lighten-2 ma-1 pa-4">08:00 - 08:30</button>
          </router-link>
          <router-link :to="'/dat-lich-kham/' + getItem.id">
            <button class="bg-grey-lighten-2 ma-1 pa-4">08:00 - 08:30</button>
          </router-link>
        </div>
      </div>
      <div class="v-col-5 ml-2">
        <p>ĐỊA CHỈ KHÁM</p>
        <div class="address">{{ getItem.address }}</div>
        <div class="price">GIÁ KHÁM: 500.000đ</div>
      </div>
      </div>
    </v-container>
  </main-content>
</template>

<script>
import { doctor } from "../../../state/helpers";
export default {
  computed: {
    ...doctor.doctorComputed,
    getItem() {
      return this.doctorItem;
    },
    getCurrentDate() {
      const today = new Date();
      return today;
    },
    getNextDay() {
      const tomorrow = new Date(this.getCurrentDate);
      tomorrow.setDate(tomorrow.getDate() + 1);
      return tomorrow;
    },
    getTwoDaysLater() {
      const twoDays = new Date(this.getCurrentDate);
      twoDays.setDate(twoDays.getDate() + 2);
      return twoDays;
    },
    getThreeDaysLater() {
      const threeDays = new Date(this.getCurrentDate);
      threeDays.setDate(threeDays.getDate() + 3);
      return threeDays;
    },
    getFourDaysLater() {
      const fourDays = new Date(this.getCurrentDate);
      fourDays.setDate(fourDays.getDate() + 4);
      return fourDays;
    },
  },
  methods: {
    ...doctor.doctorsMethods,
    async initial() {
      await this.getDetailDoctor(this.$route.params.doctorId);
    },
  },
  async created() {
    await this.initial();
  },
};
</script>

<style scoped>
.v-container {
  max-width: 1200px;
}

.v-icon {
  font-size: 20px;
}

span {
  font-size: 18px;
}

img {
  border-radius: 50%;
}

.name {
  font-size: 25px;
  font-weight: 500;
}

p {
  font-size: 15px;
}

.select-day {
  border-bottom: 1px solid #ccc;
}

option {
  font-size: 16px;
}
button {
  font-weight: 500;
}

button:hover {
  border: 2px solid #33b0e3;
}

.date {
  border-right: 1px solid #ccc;
}
</style>

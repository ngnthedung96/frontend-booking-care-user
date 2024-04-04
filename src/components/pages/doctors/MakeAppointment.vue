<template>
  <main-content>
    <div class="info-doctor bg-grey-lighten-2">
      <v-container>
        <div class="info-box d-flex">
          <div class="v-col-2">
            <img class="w-100" src="../../../img/doctor/avatar.jpg" alt="" />
          </div>
          <div class="v-col-10">
            <div class="title">ĐẶT LỊCH KHÁM</div>
            <div class="name">{{ getItem.name }}</div>
            <div class="time">08:00 - 08:30</div>
          </div>
        </div>
      </v-container>
    </div>
    <v-container>
        <div class="price v-col-2">
          <div class="price-head">Giá khám</div>
          <div class="price-num">500.000đ</div>
        </div>
      <make-appointment></make-appointment>
    </v-container>
  </main-content>
</template>

<script>
import { doctor } from "../../../state/helpers";
import MakeAppointment from "./layout/PatientInfo.vue";
export default {
  components: {
    MakeAppointment,
  },
  computed: {
    ...doctor.doctorComputed,
    getItem() {
      return this.doctorItem;
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
  max-width: 800px;
}

img {
  border-radius: 50%;
}

button {
    font-weight: 500;
    font-size: 23px;
}
</style>

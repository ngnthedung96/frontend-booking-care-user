<template>
  <section>
    <form @submit.prevent="sendInfo">
      <div class="form-control">
        <v-text-field
          v-model="name"
          prepend-inner-icon="mdi-account"
          label="Họ và tên bệnh nhân (bắt buộc)"
        >
        </v-text-field>
      </div>
      <div class="form-control">
        <v-radio-group>
          <v-row>
            <v-radio label="Nam" value="Nam"></v-radio>
            <v-radio label="Nữ" value="Nữ"></v-radio>
          </v-row>
        </v-radio-group>
      </div>
      <div class="form-control">
        <v-text-field
          v-model="phone"
          prepend-inner-icon="mdi-phone"
          label="Số điện thoại (bắt buộc)"
        >
        </v-text-field>
      </div>
      <div class="form-control">
        <v-text-field
          v-model="phone"
          prepend-inner-icon="mdi-calendar-outline"
          label="Ngày/Tháng/Năm Sinh (bắt buộc)"
        >
        </v-text-field>
      </div>
      <div class="form-control">
        <v-text-field
          v-model="address"
          prepend-inner-icon="mdi-map-marker"
          label="Địa chỉ"
        >
        </v-text-field>
      </div>
      <div class="form-control mb-4">
        <v-text-field
          v-model="reason"
          prepend-inner-icon="mdi-medication"
          label="Lý do khám"
        >
        </v-text-field>
      </div>
      <div class="warning bg-light-blue-lighten-4 pa-4 mb-3">
        <div class="warning-head">Lưu ý</div>
        <div class="warning-desc">
          Thông tin anh/chị cung cấp sẽ được sử dụng làm hồ sơ khám bệnh, khi
          điền thông tin anh/chị vui lòng:
          <ul class="ml-5">
            <br />
            <li>
              Ghi rõ họ và tên, viết hoa những chữ cái đầu tiên, ví dụ: Trần Văn
              Phú
            </li>
            <li>
              Điền đầy đủ, đúng và vui lòng kiểm tra lại thông tin trước khi ấn
              "Xác nhận"
            </li>
          </ul>
        </div>
      </div>
      <button @click="sendInfo" type="submit" class="w-100 bg-yellow-lighten-1 py-3">Xác nhận khám</button>
    </form>
  </section>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
export default {
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      name: "",
      address: "",
      phone: "",
      birth: "",
      reason: "",
    };
  },
  validations() {
    return {
      name: { required },
      phone: { required },
      birth: { required },
    };
  },
  methods: {
    sendInfo() {
        
    }
  }
};
</script>

<style scoped>
button {
    font-weight: 500;
    font-size: 23px;
}
</style>

<template>
  <section class="d-flex align-center">
    <v-container>
      <div class="mx-auto v-col-6">
        <div class="v-col-12">
          <img src="../../img/logo.png" alt="" />
          <form @submit.prevent="submit">
            <div class="form-control">
              <v-text-field
                v-model="name.value.value"
                :counter="10"
                :error-messages="name.errorMessage.value"
                label="Họ và tên"
              ></v-text-field>
            </div>
            <div class="form-control">
              <v-text-field
                v-model="phone.value.value"
                :counter="7"
                :error-messages="phone.errorMessage.value"
                label="Số điện thoại"
              ></v-text-field>
            </div>

            <div class="form-control">
              <v-text-field
                v-model="address.value.value"
                :error-messages="address.errorMessage.value"
                label="Địa chỉ"
              ></v-text-field>
            </div>

            <div class="form-control">
              <v-text-field
                v-model="email.value.value"
                :error-messages="email.errorMessage.value"
                label="Email"
              ></v-text-field>
            </div>

            <div class="form-control">
              <v-text-field
                v-model="password.value.value"
                :error-messages="password.errorMessage.value"
                label="Mật khẩu"
              ></v-text-field>
            </div>

            <div class="form-control">
              <v-file-input
                accept="image/*"
                label="Ảnh đại diện"
              ></v-file-input>
            </div>

            <v-btn class="me-4 bg-blue-lighten-1" type="submit"> Đăng ký </v-btn>

            <v-btn class="bg-grey-lighten-2" @click="handleReset">Xoá</v-btn>
          </form>
        </div>
      </div>
    </v-container>
  </section>
</template>
<script setup>
import { useField, useForm } from "vee-validate";

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    name(value) {
      if (value?.length) return true;

      return "Hãy nhập tên của bạn";
    },
    phone(value) {
      if (value?.length > 9 && /[0-9-]+/.test(value)) return true;

      return "Số điện thoại của bạn không hợp lệ";
    },
    email(value) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;

      return "Email không hợp lệ";
    },
    address(value) {
      if (value?.length) return true;
      return "Nhập địa chỉ của bạn";
    },
    password(value) {
      if (value?.length) return true;
      return "Hãy nhập mật khẩu của bạn";
    },
  },
});
const name = useField("name");
const phone = useField("phone");
const email = useField("email");
const address = useField("address");
const password = useField("password");

const submit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
});
</script>

<style scoped>
section {
  height: 100vh;
  background-color: rgb(225, 245, 254);
}
.v-container {
  max-width: 1200px;
}

.mx-auto {
  background-color: #fff;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>

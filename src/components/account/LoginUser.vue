<template>
  <section class="d-flex align-center">
    <v-container>
      <div class="mx-auto v-col-6">
        <div class="v-col-12">
          <img class="mb-4" src="../../img/logo.png" alt="" />
          <form @submit.prevent="submit">

            <div class="form-control">
              <v-text-field
                v-model="email.value.value"
                :error-messages="email.errorMessage.value"
                label="Email"
              ></v-text-field>
            </div>

            <div class="form-control">
              <v-text-field
                v-model="email.value.value"
                :error-messages="password.errorMessage.value"
                label="Mật khẩu"
              ></v-text-field>
            </div>
            <v-btn class="me-4 my-8 v-col-12 bg-blue-lighten-1" type="submit"> Đăng nhập </v-btn>
            <div class="signup">Bạn chưa có tài khoản ?
              <router-link to="/dang-ky">Đăng ký</router-link>
            </div>
          </form>
        </div>
      </div>
    </v-container>
  </section>
</template>
<script setup>
import { useField, useForm } from "vee-validate";

const { handleSubmit } = useForm({
  validationSchema: {
    email(value) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;

      return "Email không hợp lệ";
    },
    password(value) {
      if (value?.length) return true;
      return "Hãy nhập mật khẩu của bạn";
    },
  },
});
const email = useField("email");
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

.v-col-6 {
  background-color: #fff;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  position: relative;
}
</style>

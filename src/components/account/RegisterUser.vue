<template>
  <section class="d-flex align-center">
    <v-container>
      <div class="mx-auto v-col-6">
        <div class="v-col-12">
          <img class="mb-4" src="../../img/logo.png" alt="" />
          <form @submit.prevent="tryToLogIn">
            <div class="form-control">
              <v-text-field
                v-model="name"
                :counter="10"
                :error-messages="
                  checkError(
                    submitted && v$.name.$error,
                    v$.name.required,
                    'Vui lòng nhập họ và tên'
                  )
                "
                label="Họ và tên"
              ></v-text-field>
            </div>
            <div class="form-control">
              <v-text-field
                v-model="phone"
                :error-messages="
                  checkError(
                    submitted && v$.phone.$error,
                    v$.name.required,
                    'Vui lòng nhập  số điện thoại'
                  )
                "
                label="Số điện thoại"
              ></v-text-field>
            </div>

            <div class="form-control">
              <v-text-field
                v-model="address"
                :error-messages="
                  checkError(
                    submitted && v$.address.$error,
                    v$.address.required,
                    'Vui lòng nhập địa chỉ'
                  )
                "
                label="Địa chỉ"
              ></v-text-field>
            </div>

            <div class="form-control">
              <v-text-field
                v-model="email"
                :error-messages="
                  checkError(
                    submitted && v$.email.$error,
                    v$.email.required,
                    'Vui lòng nhập địa chỉ email'
                  )
                "
                label="Email"
              ></v-text-field>
            </div>

            <div class="form-control">
              <v-text-field
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                :type="showPassword ? 'text' : 'password'"
                @click:append="showPassword = !showPassword"
                v-model="password"
                :error-messages="
                  checkError(
                    submitted && v$.password.$error,
                    v$.password.required,
                    'Vui lòng nhập mật khẩu'
                  )
                "
                label="Mật khẩu"
              ></v-text-field>
            </div>

            <div class="form-control">
              <v-file-input
                accept="image/*"
                label="Ảnh đại diện"
              ></v-file-input>
            </div>

            <v-btn
              size="x-large"
              v-if="!isLoading"
              class="bg-blue-lighten-1 v-col-12"
              type="submit"
            >
              Đăng ký
            </v-btn>
            <v-btn
              size="x-large"
              v-else
              class="me-4 my-8 v-col-12 bg-blue-lighten-1"
              type="submit"
            >
              Đăng ký
              <v-progress-circular
                class="ms-2"
                color="primary"
                indeterminate
              ></v-progress-circular>
            </v-btn>
          </form>
        </div>
      </div>
    </v-container>
  </section>
</template>
<script>
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, email } from "@vuelidate/validators";
import { authMethods, notificationMethods } from "@/state/helpers";
export default {
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      name: "",
      password: "",
      phone: "",
      address: "",
      email: "",
      showPassword: false,
      submitted: false,
      isLoading: false,
    };
  },
  computed: {
    notification() {
      return this.$store ? this.$store.state.notification : null;
    },
  },
  validations() {
    return {
      name: { required },
      phone: { required },
      address: { required },
      email: { required, email },
      password: { required, minLengthValue: minLength(6) },
    };
  },
  methods: {
    ...authMethods,
    ...notificationMethods,
    // Try to log the user in with the username
    // and password they provided.
    checkError(isError, isRequired, msg) {
      if (isError && isRequired) {
        return msg;
      }
    },
    async tryToLogIn() {
      this.submitted = true;
      this.isLoading = true;
      // stop here if form is invalid
      const isFormCorrect = this.v$.$validate();
      if (!isFormCorrect) {
        return;
      } else {
        const { name, password, phone, address, email } = this;
        await this.registeruser({
          name,
          password,
          phone,
          address,
          email,
        });
      }
      this.isLoading = false;
    },
  },
};
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

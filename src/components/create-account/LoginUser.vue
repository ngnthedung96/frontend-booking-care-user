<template>
  <section class="d-flex align-center">
    <v-container>
      <div class="mx-auto v-col-6">
        <div class="v-col-12">
          <img class="mb-4" src="../../img/logo.png" alt="" />
          <form @submit.prevent="tryToLogIn">
            <div class="form-control">
              <v-text-field
                v-model="account"
                label="Tài khoản"
                :error-messages="
                  checkError(
                    submitted && v$.account.$error,
                    v$.account.required,
                    'Vui lòng nhập email hoặc số điện thoại'
                  )
                "
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
                    'Vui lòng nhập mật khẩu với độ dài hơn 6 kí tự'
                  )
                "
                label="Mật khẩu"
              ></v-text-field>
            </div>
            <v-btn
              size="x-large"
              v-if="!isLoading"
              class="me-4 mt-8 mb-6 v-col-12 bg-blue-lighten-1"
              type="submit"
            >
              Đăng nhập
            </v-btn>
            <v-btn
              size="x-large"
              v-else
              class="me-4 my-8 v-col-12 bg-blue-lighten-1"
              type="submit"
            >
              Đăng nhập
              <v-progress-circular
                class="ms-2"
                color="primary"
                indeterminate
              ></v-progress-circular>
            </v-btn>
            <div class="forgot-password mb-2">
              <router-link to="/quen-mat-khau">Quên mật khẩu ?</router-link>
            </div>
            <div class="signup">
              Bạn chưa có tài khoản ?
              <router-link to="/dang-ky">Đăng ký</router-link>
            </div>
          </form>
        </div>
      </div>
    </v-container>
  </section>
</template>
<script>
import { useVuelidate } from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import { authMethods, notificationMethods } from "@/state/helpers";
export default {
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      account: "",
      password: "",
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
      account: { required },
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
        const { account, password } = this;

        if (account && password) {
          await this.login({
            account,
            password,
          });
        }
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

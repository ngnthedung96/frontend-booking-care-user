<template>
    <main-content>
      <v-container>
        <div class="mx-auto v-col-4">
          <div class="v-col-12 d-flex flex-column">
            <img class="align-self-center" src="../../img/key.jpg" alt="" />
            <div class="my-2 title align-self-center">Cài đặt lại mật khẩu</div>
            <span class="my-4"
              >Nhập code đã gửi đến email của bạn và nhập mật khẩu mới
            </span>
            <form @submit.prevent="sendData">
              <v-text-field
                v-model="code"
                label="Nhập mã code"
                :error-messages="
                  checkError(
                    submitted && v$.code.$error,
                    v$.code.required,
                    'Mã không hợp lệ'
                  )
                "
              ></v-text-field>
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
              <v-btn
                size="x-large"
                class="bg-blue-lighten-1 v-col-12"
                type="submit"
                >Đặt lại mật khẩu</v-btn
              >
            </form>
          </div>
        </div>
      </v-container>
    </main-content>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import { patientMethods } from "@/state/modules/patients";
export default {
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      code: "",
      password: "",
      showPassword: false,
      submitted: false,
    };
  },
  validations() {
    return {
      password: { required, minLengthValue: minLength(6) },
      code: { required }
    };
  },
  computed: {},
  methods: {
    ...patientMethods,
    checkError(isRequired, isError, msg) {
      if (isRequired && isError) {
        return msg;
      }
    },
    async sendData() {
      this.submitted = true
      const isFormCorrect = this.v$.$validate()
      if (!isFormCorrect) {
        return
      }
      else {
        const { code, password } = this
        if (code && password) {
          await this.newPassword({
            code,
            password,
            id: this.$route.query.id
          })
        }
      }
    }
  },
};
</script>

<style scoped>
img {
  width: 20%;
}

.title {
  font-size: 30px;
  font-family: bold;
}

.v-col-4 {
  border: 1px solid #ccc;
  border-radius: 20px;
}

.body {
  position: relative;
  height: 100vh;
}
</style>

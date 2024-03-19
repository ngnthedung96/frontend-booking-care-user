<template>
  <div class="body">
    <main-content>
      <v-container>
        <div class="mx-auto v-col-4">
          <div class="v-col-12 d-flex flex-column">
            <img class="align-self-center" src="../../img/key.jpg" alt="" />
            <div class="my-2 title align-self-center">Cài đặt lại mật khẩu</div>
            <span class="my-4"
              >Bạn quên mật khẩu? Hãy điền email và bạn sẽ được nhận code để đặt
              lại mật khẩu thông qua email
            </span>
            <form @submit.prevent="sendEmail">
              <v-text-field
                v-model="email"
                label="Email"
                :error-messages="
                  checkError(
                    submitted && v$.email.$error,
                    v$.email.required,
                    'Vui lòng nhập địa chỉ email'
                  )
                "
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
  </div>
</template>

<script>
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import { patientMethods } from "@/state/modules/patients";
export default {
  setup() {
    return {
      v$: useVuelidate(),
    };
  },
  data() {
    return {
      email: "",
      submitted: false,
    };
  },
  validations() {
    return {
      email: { required, email },
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
    async sendEmail() {
      this.submitted = true;
      const isFormCorrect = this.v$.$validate();
      if (!isFormCorrect) {
        return;
      } else {
        const { email } = this;
        await this.updatePassword({
          email,
        });
      }
    },
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

.v-container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>

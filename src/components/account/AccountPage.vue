<template>
  <main-content>
    <v-container>
      <div class="profile d-flex justify-center">
        <div class="container w-100">
          <h2>Tài khoản của bạn</h2>
          <div class="profile-info w-100">
            <img class="initials" src="../../img/doctor/avatar.jpg" alt="" />
            <div class="admin-badge">
              <span>admin</span>
            </div>
            <form @submit.prevent="saveChanges">
              <div class="form-control">
                <v-text-field
                  v-model="name"
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
                <v-file-input
                  accept="image/*"
                  label="Ảnh đại diện"
                ></v-file-input>
              </div>

              <v-btn
                size="x-large"
                class="bg-blue-lighten-1 v-col-12"
                type="submit"
              >
                Lưu thay đổi
                <v-progress-circular
                v-if="isLoading"
                class="ms-2"
                color="primary"
                indeterminate
              ></v-progress-circular>
              </v-btn>
            </form>
          </div>
        </div>
      </div>
    </v-container>
  </main-content>
</template>

<script>
import { authComputed, patients } from "../../state/helpers"
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
      phone: "",
      submitted: false,
      isLoading: false
    };
  },
  validations() {
    return {
      name: { required },
      phone: { required },
    };
  },
  computed: {
    ...authComputed,
    ...patients.patientComputed,
    patient() {
      return JSON.parse(JSON.stringify(this.currentUser))

    }
  },
  methods: {
    ...patients.patientMethods,
    checkError(isError, isRequired, msg) {
      if (isError && isRequired) {
        return msg;
      }
    },
    async saveChanges() {
      this.submitted = true;
      this.isLoading = true
      const isFormCorrect = this.v$.$validate();
      if (!isFormCorrect) {
        return;
      }
      else { 
        const { name, phone } = this;
        await this.updatePatient({
          name,
          phone
        });
      }
      this.isLoading = false
    },
  },
  created() {
    this.name = this.patient.name
    this.phone = this.patient.phone
  }
};
</script>

<style scoped>
.container {
  max-width: 1000px;
  padding: 60px 25px;
}
h2 {
  text-align: center;
  margin-bottom: 16px;
  font-weight: 300;
  font-size: 32px;
}

.profile-info {
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 32px;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 32px auto;
}

.initials {
  position: initial;
  width: 100px;
  height: 100px;
  font-size: 32px;
  background-color: #303030;
  color: #fff;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.admin-badge {
  display: flex;
  align-self: center;
  color: #fff;
  font-size: 14px;
  padding: 8px 24px;
  border-radius: 8px;
  background-color: #303030;
  margin: 16px 0;
  text-align: center;
  text-transform: capitalize;
}

.icon {
  width: 14px;
  height: auto;
  margin-right: 8px;
}

label {
  font-size: 14px;
  display: block;
  padding-bottom: 6px;
}
input {
  width: 100%;
  border: none;
  background-color: #f2f7f6;
  padding: 8px;
  height: 50px;
}

button {
  align-self: center;
}
</style>

<template>
  <main-content>
    <v-container class="d-flex align-center">
      <div class="mx-auto v-col-6 d-flex flex-column">
        <v-icon class="text-green mx-auto">mdi-email-check</v-icon>
        <div v-if="!isVerify" class="title mx-auto">Đang xác thực</div>
        <div v-else class="title mx-auto">Email của bạn đã được xác thực thành công</div>
        <v-btn v-if="isVerify" @click="backToLogin" size="large" class="mt-3 bg-light-blue-lighten-1 w-50 mx-auto">Quay về đăng nhập</v-btn>
      </div>
    </v-container>
  </main-content>
</template>

<script>
import router from '@/routers'
import { systemAxios } from '@/services/axios.service'
export default {
  data() {
    return {
      isVerify: false
    }
  },
  methods: {
    backToLogin() {
      router.push('/dang-nhap')
    },
    verify() {
      
    }
  },
  mounted() {
    systemAxios.get(`/auth/verify-email/${this.$route.query.id}`)
    .then((res) => {
      if (!res.data.error) {
        setTimeout(() => {
          this.isVerify = true
        }, 1500)
      }
    })
  }
}
</script>

<style scoped>
.v-container {
  max-width: 1200xp;
  min-height: 41vh;
}

.v-icon {
  font-size: 100px;
}

.title {
  font-size: 25px;
}

.v-col-6 {
  border: 1px solid #ccc;
  border-radius: 20px;
}
</style>
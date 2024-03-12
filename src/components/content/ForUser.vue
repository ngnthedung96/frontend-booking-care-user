<template>
  <h2 class="mb-3" style="font-weight: 600;">Dành cho bạn</h2>
  <section class="v-col-12 d-flex justify-center pa-0">
    <div class="v-col-11 pa-0">
      <ul class="v-col-12 d-flex flex-row pa-0">
        <li class="v-col-3">
          <router-link class="d-flex flex-column v-col-auto text-decoration-none text-black" to="/">
            <img src="../../img/foruser/facility.png" alt="">
            <span class="mx-auto mt-6">Cơ sở y tế</span>
          </router-link>
        </li>
        <li class="v-col-3">
          <router-link class="d-flex flex-column v-col-auto text-decoration-none text-black" to="/">
            <img src="../../img/foruser/speciality.png" alt="">
            <span class="mx-auto mt-6">Chuyên khoa</span>
          </router-link>
        </li>
        <li class="v-col-3">
          <router-link class="d-flex flex-column v-col-auto text-decoration-none text-black" to="/">
            <img src="../../img/foruser/article.png" alt="">
            <span class="mx-auto mt-6">Bài viết</span>
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
ul {
  list-style-type: none;
}

img {
  width: 100%;
  border-radius: 50%;
}

.mt-6 {
  font-weight: 500;
  font-size: 20px;
}
</style>
<template>
  <div class="mb-6 d-flex flex-row justify-space-between">
    <div class="px-0 v-col-3">
      <h2 style="font-weight: 600">Chuyên Khoa</h2>
    </div>
    <div class="px-0 v-col-2">
      <router-link class="text-decoration-none" to="/">
        <v-btn
          size="large"
          class="bg-teal-lighten-5 text-cyan-accent-4 text-capitalize"
          block
          >Xem thêm</v-btn
        >
      </router-link>
    </div>
  </div>
  <v-sheet
    class="mx-auto"
    max-width="1200"
  >
    <v-slide-group
      class="pa-0"
      selected-class="bg-primary"
      mandatory
      show-arrows
    >
      <v-slide-group-item
        v-for="n in 15"
        :key="n"
      >
        <v-card
          class="ma-4"
          color="grey-lighten-1"
          height="350"
          width="357.333333333"
        >
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>


<style>
.v-slide-group {
  position: relative;
}
.v-slide-group__next, .v-slide-group__prev--disabled, .v-slide-group__prev, .v-slide-group__next--disabled {
  font-size: 30px;
  min-width: 40px;
  height: 52px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  background-color: green;
  border-radius: 20px;
  box-shadow: rgb(201, 236, 240) 2px 2px 5px;
  border: 1px rgb(181, 231, 237) solid;
  background-color: rgb(255, 255, 255);
}

.v-slide-group__next, .v-slide-group__next--disabled {
  right: 0px;
}

.v-slide-group__prev, .v-slide-group__prev--disabled {
  left: 0px;
}
</style>
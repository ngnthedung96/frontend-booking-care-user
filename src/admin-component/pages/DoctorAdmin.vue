<template>
  <admin-content>
    <div class="sub-header d-flex justify-space-between align-center pa-4">
      <div class="title">Quản trị bác sĩ</div>
      <div class="action d-flex align-center float-rigt w-50">
        <button class="pa-3 border-style bg-light-blue-darken-1">
          Thêm bác sĩ
        </button>
        <v-autocomplete
          class="ml-10 mt-5"
          density="comfortable"
          menu-icon=""
          placeholder="Tìm kiếm"
          prepend-inner-icon="mdi-magnify"
          style="max-width: 350px"
          theme="light"
          variant="solo"
          auto-select-first
          item-props
          rounded
        ></v-autocomplete>
      </div>
    </div>
    <v-table class="my-4 mx-8" theme="light">
      <thead>
        <tr>
          <th class="text-left index">STT</th>
          <th class="text-left name">Tên bác sĩ</th>
          <th class="text-left phone">Số điện thoại</th>
          <th class="text-left email">Email</th>
          <th class="text-left address">Địa chỉ</th>
          <th class="text-left id">id</th>
          <th class="text-left edit">Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in doctorList" :key="item.id" :id="item.id">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.phone }}</td>
          <td>{{ item.email }}</td>
          <td class="py-3">{{ item.address }}</td>
          <td>{{ item.id }}</td>
          <td>
            <div class="d-flex flex-wrap justify-space-around">
              <button class="pa-1 bg-light-blue-darken-1">
                <v-icon>mdi-file-edit-outline</v-icon>
                <span>Edit</span>
              </button>
              <button class="pa-1 bg-red-lighten-1">
                <v-icon>mdi-trash-can-outline</v-icon>
                <span>Xóa</span>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </v-table>
  </admin-content>
</template>

<style scoped>
.sub-header {
  border-top: 1px solid #ccc;
}

.title {
  font-size: 25px;
  font-weight: 500;
}

.border-style {
  border-radius: 20px;
}

.text-left {
  font-size: 20px;
}

.index {
  width: 5%;
}

.phone {
  width: 10%;
}

.name {
  width: 10%;
}
.email {
  width: 10%;
}

.address {
  width: 20%;
}

.id {
  width: 10%;
}

.edit {
  width: 10%;
}

td {
  font-size: 16px;
}
</style>

<script>
import { doctor } from "@/state/helpers";
export default {
  computed: {
    ...doctor.doctorComputed,
  },
  methods: {
    ...doctor.doctorsMethods,
    initial() {
      this.getDoctors();
    },
    async getDoctors() {
      await this.getListDoctors();
    },
  },
  created() {
    this.initial();
  },
};
</script>

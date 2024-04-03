<template>
  <admin-content>
    <div class="sub-header d-flex justify-space-between align-center pa-4">
      <div class="title">Quản trị chuyên khoa</div>
      <div class="action d-flex align-center float-rigt w-50">
        <button class="pa-3 border-style bg-light-blue-darken-1">
          Thêm chuyên khoa
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
          <th class="text-left name">Tên chuyên khoa</th>
          <th class="text-left desc">Mô tả</th>
          <th class="text-left id">id</th>
          <th class="text-left edit">Edit</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in specialityList"
          :key="item.id"
          :id="item.id"
          :name="item.id"
          :desc="item.description"
        >
          <td>{{ index + 1 }}</td>
          <td class="py-3">{{ item.name }}</td>
          <td class="py-3">{{ item.description }}</td>
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

.index {
  width: 5%;
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

.desc {
  width: 30%;
}

.name {
  width: 25%;
}

.id {
  width: 15%;
}

.edit {
  width: 10%;
}

td {
  font-size: 16px;
}
</style>

<script>
import { speciality } from "../../state/helpers";
export default {
  computed: {
    ...speciality.specialityComputed,
  },
  methods: {
    ...speciality.specialityMethods,
    initial() {
      this.getSpeciality();
    },
    async getSpeciality() {
      await this.getListSpeciality();
    },
  },
  async created() {
    this.initial();
  },
};
</script>

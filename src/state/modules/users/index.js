import { mapState, mapGetters, mapActions } from "vuex";

export const userComputed = {
  ...mapState("users/users", ["userList"]),
};
export const userMethods = {
  ...mapActions("users/users", ["getListUser", "getListExcel"]),
};

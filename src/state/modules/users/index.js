import { mapState, mapGetters, mapActions } from "vuex";

export const userComputed = {
  ...mapState("users/users", ["userList"]),
  ...mapState("users/userpm", ["userPmDatas"]),
};
export const userMethods = {
  ...mapActions("users/users", ["getListUser", "getListExcel"]),
  ...mapActions("users/userpm", [
    "getListUserPms",
    "createUserPm",
    "updateUserPm",
    "deleteUserPm",
  ]),
};

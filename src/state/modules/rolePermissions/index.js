import { mapState, mapGetters, mapActions } from "vuex";

export const rolePerComputed = {
  ...mapState("rolePermissions/rolePermissions", [
    "noticeRolePer",
    "listRolePer",
    "allRolePer",
  ]),
};
export const rolePerMethods = {
  ...mapActions("rolePermissions/rolePermissions", [
    "getRolePers",
    "createRolePer",
    "editRolePer",
    "deleteRolePer",
    "restoreRolePer",
    "getAllRolePer",
  ]),
};

import { mapState, mapGetters, mapActions } from "vuex";

export const permissionComputed = {
  ...mapState("permissions/permissions", ["listPermission", "allPermission"]),
};
export const permissionMethods = {
  ...mapActions("permissions/permissions", [
    "getPermissions",
    "createPermission",
    "editPermission",
    "deletePermission",
    "restorePermission",
    "getAllPermission",
  ]),
};

import { mapState, mapGetters, mapActions } from "vuex";

export const roleComputed = {
  ...mapState("roles/roles", ["listRole", "allRole"]),
};
export const roleMethods = {
  ...mapActions("roles/roles", [
    "getRoles",
    "createRole",
    "editRole",
    "deleteRole",
    "restoreRole",
    "getAllRole",
    "removeRole",
  ]),
};

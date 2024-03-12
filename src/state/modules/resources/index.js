import { mapState, mapGetters, mapActions } from "vuex";

export const resourceComputed = {
  ...mapState("resources/resources", ["listResource", "allResource"]),
};
export const resourceMethods = {
  ...mapActions("resources/resources", ["getResources", "getAllResource"]),
};

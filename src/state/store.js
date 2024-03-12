import Vue from "vue";
import Vuex from "vuex";
import LogRocket from "logrocket";
// LogRocket.init("sxu2fp/demo");

import modules from "./modules";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  modules,
  // Enable strict mode in development to get a warning
  // when mutating state outside of a mutation.
  // https://vuex.vuejs.org/guide/strict.html
  strict: process.env.NODE_ENV !== "production",
});

export default store;

import { createRouter, createWebHistory } from "vue-router";
import tokenService from "../services/token.service.js";
// import store from "@/state/store";
import routes from "./routers.js";
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

// Before each route evaluates...
router.beforeEach((routeTo, routeFrom, next) => {
  const unPublicPages = [];
  const authpage = !unPublicPages.includes(routeTo.path);
  // const loggeduser = store.getters["authfack/loggedIn"];
  let checkUser = null;
  if (tokenService.getAdmin()) {
    checkUser = tokenService.getAdmin().adminInfo;
  }
  if (authpage && !checkUser) {
    console.log("lỗiiiiii");
    return;
  }

  next();
});

export default router;

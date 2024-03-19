// import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/pages/homepage/HomePage.vue";
import HomeService from "../components/pages/homeservice/HomeService.vue";
import HospitalService from "../components/pages/hospitalservice/HospitalService.vue";
import SearchPage from "../components/pages/searchpage/SearchPage.vue";
import StayHealthy from "../components/pages/stayhealthy/StayHealthy.vue";
import TimeSchedule from "../components/pages/schedule/TimeSchedule.vue";
import LoginUser from "../components/create-account/LoginUser.vue";
import RegisterUser from "../components/create-account/RegisterUser.vue";
import AccountPage from "@/components/account/AccountPage.vue";
import ForgotPassword from "@/components/account/ForgotPassword.vue";

export default [
  { path: "/", component: HomePage },
  { path: "/dich-vu/tai-nha", component: HomeService },
  { path: "/dich-vu/tai-vien", component: HospitalService },
  { path: "/tim-kiem", component: SearchPage },
  { path: "/dich-vu/song-khoe", component: StayHealthy },
  { path: "/lich-hen", component: TimeSchedule },
  {
    path: "/dang-nhap",
    meta: { authRequired: false },
    component: LoginUser,
  },
  {
    path: "/dang-ky",
    meta: { authRequired: true },
    component: RegisterUser,
  },
  {
    path: "/tai-khoan",
    component: AccountPage
  },
  {
    path: "/quen-mat-khau",
    component: ForgotPassword
  }
  // {
  //   path: "/404",
  //   name: "404",
  //   component: require("./views/utility/404").default,
  // },
  // // Redirect any unmatched routes to the 404 page. This may
  // // require some server configuration to work in production:
  // // https://router.vuejs.org/en/essentials/history-mode.html#example-server-configurations
  // {
  //   path: "*",
  //   redirect: "404",
  // },
];

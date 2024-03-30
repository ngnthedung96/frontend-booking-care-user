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
import ResetPassword from "../components/account/ResetPassword.vue";
import VerifyEmail from "../components/account/VerifyEmail.vue";
import FacilityInfo from "@/components/pages/facility/FacilityInfo.vue";
import SpecialityPage from "@/components/pages/speciality/SpecialityPage.vue";
import FacilityPage from "../components/pages/facility/FacilityPage.vue";
import SpecialityInfo from "../components/pages/speciality/SpecialityInfo.vue";
import NotFound from "@/components/pages/NotFound.vue";
import AdminPage from "@/admin-component/AdminPage.vue";
import AccountAdmin from "@/admin-component/pages/AccountAdmin.vue";
import SpecialityAdmin from "@/admin-component/pages/SpecialityAdmin.vue";
import ClinicAdmin from "../admin-component/pages/ClinicAdmin.vue"
import DoctorAdmin from "../admin-component/pages/DoctorAdmin.vue"
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
    component: AccountPage,
  },
  {
    path: "/quen-mat-khau",
    component: ForgotPassword,
  },
  {
    path: "/cai-dat-lai-mat-khau",
    component: ResetPassword,
  },
  {
    path: "/xac-thuc-email",
    component: VerifyEmail,
  },
  {
    path: "/chuyen-khoa",
    component: SpecialityPage,
  },
  {
    path: "/chuyen-khoa/:specialityId",
    component: SpecialityInfo,
  },
  {
    path: "/co-so-y-te",
    component: FacilityPage,
  },
  { path: "/co-so-y-te/:facilityId", component: FacilityInfo },
  {
    path: "/admin",
    component: AdminPage,
  },
  {
    path: "/admin/tai-khoan",
    component: AccountAdmin,
  },
  {
    path: "/admin/chuyen-khoa",
    component: SpecialityAdmin
  },
  {
    path: "/admin/co-so-y-te",
    component: ClinicAdmin
  },
  {
    path: "/admin/bac-si",
    component: DoctorAdmin
  },
  {
    path: "/:notFound(.*)",
    component: NotFound,
  },
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

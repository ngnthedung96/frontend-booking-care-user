import { createRouter, createWebHistory } from 'vue-router' 
import HomePage from './components/pages/homepage/HomePage.vue'
import HomeService from './components/pages/homeservice/HomeService.vue'
import HospitalService from './components/pages/hospitalservice/HospitalService.vue'
import SearchPage from './components/pages/searchpage/SearchPage.vue'
import StayHealthy from './components/pages/stayhealthy/StayHealthy.vue'
import TimeSchedule from './components/pages/schedule/TimeSchedule.vue'
import LoginUser from './components/account/LoginUser.vue'
import RegisterUser from './components/account/RegisterUser.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/dich-vu/tai-nha', component: HomeService },
    { path: '/dich-vu/tai-vien', component: HospitalService },
    { path: '/tim-kiem', component: SearchPage },
    { path: '/dich-vu/song-khoe', component: StayHealthy },
    { path: '/lich-hen', component: TimeSchedule },
    { path: '/dang-nhap', component: LoginUser },
    { path: '/dang-ky', component: RegisterUser },
  ]
})

export default router
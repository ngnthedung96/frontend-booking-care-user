import { createApp } from "vue";
import App from "./App.vue";
import router from "./routers/index";
import store from "./state/store";
// import VueMeta from "vue-meta";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";
import MainContent from "./components/layout/MainContent.vue";
import BannerImage from "./components/content/BannerImage.vue";
// for notification
import notification from "@kyvg/vue3-notification";
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
  },
});

const app = createApp(App);

// app.use(VueMeta, {
//   // The component option name that vue-meta looks for meta info on.
//   keyName: "page",
// });
// config axios

import { systemAxios } from "./services/axios.service";
systemAxios.interceptors.request.use((config) => {
  const token = store.getters["authfack/token"];
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

systemAxios.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const refreshToken = store.getters["authfack/refreshToken"];
    const originalConfig = err.config;

    if (
      originalConfig.url !== "/auth/login" &&
      originalConfig.url !== "/auth/refresh" &&
      err.response
    ) {
      // Access Token was expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
          const rs = await systemAxios.post("/auth/refresh", {
            refreshToken: refreshToken,
          });

          if (!rs.data.error) {
            const data = rs.data.data;
            store.dispatch("authfack/refreshToken", data);
          }
          return systemAxios(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      } else if (err.response.status === 401 && originalConfig._retry) {
        store.dispatch("authfack/logout");
      }
    } else {
      // console.log("url: ", err.response.status);
      if (originalConfig.url !== "/auth/login") {
        store.dispatch("authfack/logout");
      }
    }
    return Promise.reject(err);
  }
);

app.use(notification);
app.component("main-content", MainContent);
app.component("banner-image", BannerImage);
app.use(router);
app.use(store);
app.use(vuetify);

app.mount("#app");
export default app;

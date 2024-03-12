import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store/store.js'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

import MainContent from './components/layout/MainContent.vue'
import BannerImage from './components/content/BannerImage.vue'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi'
  }
})

const app = createApp(App)

app.component('main-content', MainContent)
app.component('banner-image', BannerImage)
app.use(router)
app.use(store)
app.use(vuetify)

app.mount('#app')

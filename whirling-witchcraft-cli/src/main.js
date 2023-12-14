import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import '@mdi/font/css/materialdesignicons.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router'
import ToastPlugin from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-bootstrap.css'

library.add(fas)

loadFonts()

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(router)
  .use(vuetify)
  .use(ToastPlugin, {
    duration: 10000,
    position: 'top-left'
  })
  .mount('#app')

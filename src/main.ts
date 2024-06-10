import "./assets/main.css";
import "./style.css";
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
// import { loadFonts } from './plugins/webfontloader'
import GoogleSignInPlugin from "vue3-google-signin"
import { createPinia } from 'pinia';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
const pinia = createPinia();
const app = createApp(App);

// loadFonts()
// App.use(GoogleSignInPlugin, {
//   clientId: '573787933121-2j7qn6cc9ftpb27sph3599d125265gd2.apps.googleusercontent.com',
// })
  app.use(router)
  .use(store)
  .use(vuetify)
  .use(pinia)
  .use(Toast, {
    position: 'top-right',
    timeout: 3000,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
  })
  .use(GoogleSignInPlugin, {
    clientId: '573787933121-2j7qn6cc9ftpb27sph3599d125265gd2.apps.googleusercontent.com',
    // clientId: '695236050667-iip20mtd60g6nb6f1ki2gatue1e3kqjb.apps.googleusercontent.com',
      scope: 'profile email',
      prompt: 'consent',
      fetch_basic_profile: true
  })
  .mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js' // ← ini menyesuaikan folder baru
import { Quasar } from 'quasar'
import 'quasar/dist/quasar.css'

createApp(App).use(Quasar).use(router).mount('#app')

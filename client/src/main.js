// main.js — arranque da app: componente raiz + router. · App bootstrap: root component + router.
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router.js'

createApp(App).use(router).mount('#app')

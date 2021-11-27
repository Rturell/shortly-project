import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import VueClipboard from 'vue3-clipboard'

const app = Vue.createApp(axios)
app.use(VueAxios, axios,VueClipboard)
createApp(App).use(router).mount('#app')

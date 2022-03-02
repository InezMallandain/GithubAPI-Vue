import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import {BasicAuthInterceptor} from './_helpers/auth-interceptor'
BasicAuthInterceptor();
createApp(App).use(store).use(router).mount('#app')

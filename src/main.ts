import { createApp } from 'vue'
import {createPinia} from "pinia";
import 'virtual:svg-icons-register'
import './style.css'
import App from './App'
import Router from "./router";


createApp(App).use(createPinia()).use(Router).mount('#app')



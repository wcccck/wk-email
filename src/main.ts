import { createApp } from 'vue'
import {createPinia} from "pinia";
import {createPersistedState} from "pinia-plugin-persistedstate";
import 'virtual:svg-icons-register'
import './style.css'
import App from './App'
import Router from "./router";
// import 'default-passive-events'

createApp(App).use(createPinia().use(createPersistedState({
  serializer:{
    serialize:JSON.stringify,
    deserialize:JSON.parse
  }
}))).use(Router).mount('#app')



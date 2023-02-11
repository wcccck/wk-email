import routes from './routes'
import {createRouter,createWebHashHistory} from "vue-router";

const Router = createRouter({
  routes,
  history:createWebHashHistory()
})

export default Router
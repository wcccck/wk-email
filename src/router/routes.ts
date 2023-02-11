import {RouteRecordRaw} from "vue-router";
import Login from '../views/login/index'
const routes:RouteRecordRaw[] = [{
  path:'/login',
  component:Login,
}]
// 白名单
// const lessWhite =[
//   '/login'
// ]
export default routes
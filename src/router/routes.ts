import {RouteRecordRaw} from "vue-router";
import Login from '../views/login/index'
import Index from '../views/index/index'
import {getToken} from "../utils/token";
const routes:RouteRecordRaw[] = [{
  path:'/login',
  component:Login,
  beforeEnter:(to,from,next)=>{ // 如果有token 就别来沾边
    const token = getToken()
    if(token && token !== ''){
      next(false)
    }else {
      next()
    }
  }
},{
  path:'/',
  redirect:'/index'
},
  {path:'/index',
  component:Index},

]

export default routes
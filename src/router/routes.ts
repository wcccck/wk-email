import {RouteRecordRaw} from "vue-router";
import Login from '../views/login/index'
import Message from '../views/message/message'
import Address from "../views/address/address";
import layout from "../views/layout/layout";
import linePage from "../views/linePage/linePage";
import {getToken} from "../utils/token";
import Discover from "../views/discover/discover";
import Profile from "../views/profile/profile";
const routes:RouteRecordRaw[] = [
    {
    path:'/',
    redirect:'/layout/message'
  },
  {
    path:'/line',
    component:linePage
  },
  {
    path:'/layout',
    component:layout,
    children:[
      {
        path:'/layout/message',
        component:Message,
        name:"index"
      },
      {
        path:'/layout/address',
        component:Address,
        name:'Address'
      },
      {
        path:'/layout/discover',
        component:Discover,
        name:'Discover'
      },
      {
        path:'/layout/profile',
        component:Profile,
        name:'Profile',
      },
    ]
  },
    {
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
    },

]

export default routes
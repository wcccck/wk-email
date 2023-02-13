import {RouteRecordRaw} from "vue-router";
import Login from '../views/login/index'
import Index from '../views/index/index'
import Inbox from "../views/index/chilrend/Inbox/Inbox";
import unRead from "../views/index/chilrend/unRead/unRead";
import Profile from "../views/profile/profile";
import {getToken} from "../utils/token";
const routes:RouteRecordRaw[] = [
    {
    path:'/',
    redirect:'/index'
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
    {
      path:'/index',
      component:Index,
      name:"index",
      children:[
        {
          path:'/index/inbox',
          component:Inbox,
          name:"Inbox",
          meta:{
            chinaName:"收件箱" as String
          }
        },
        {
          path:'/index',
          redirect:'/index/inbox'
        },
        {
          path:"/index/unread",
          component:unRead,
          name:"UnRead",
          meta:{
            chinaName:"未读" as String
          }
        }
      ]
    },
    {
      path:'/profile',
      component:Profile,
      name:'Profile'
    }
]

export default routes
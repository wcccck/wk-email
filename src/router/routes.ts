import {RouteRecordRaw} from "vue-router";
import Login from '../views/login/index'
import Index from '../views/index/index'
import Inbox from "../views/index/chilrend/Inbox/Inbox";
import unRead from "../views/index/chilrend/unRead/unRead";
import Profile from "../views/profile/profile";
import layout from "../views/layout/layout";
import linePage from "../views/linePage/linePage";
import {getToken} from "../utils/token";
const routes:RouteRecordRaw[] = [
    {
    path:'/',
    redirect:'/layout/index'
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
        path:'/layout/index',
        component:Index,
        name:"index",
        children:[
          {
            path:'/layout/index/inbox',
            component:Inbox,
            name:"Inbox",
            meta:{
              chinaName:"收件箱" as String
            }
          },
          {
            path:'/layout/index',
            redirect:'/layout/index/inbox'
          },
          {
            path:"/layout/index/unread",
            component:unRead,
            name:"UnRead",
            meta:{
              chinaName:"未读" as String
            }
          }
        ]
      },
      {
        path:'/layout/profile',
        component:Profile,
        name:'Profile'
      }
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
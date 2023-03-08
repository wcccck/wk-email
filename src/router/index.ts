import routes from './routes'
import {createRouter,createWebHashHistory} from "vue-router";
import useTokenStore from "../store/tokenStore";
const Router = createRouter({
  routes:  routes ,
  history:createWebHashHistory()
})
// 白名单权限控制
export const lessWhite =[
  '/login',
  '/register'
]
Router.beforeEach((to,from,next)=>{
  let isWhiteLess = lessWhite.find((item)=>{return item === to.path})
  if(!isWhiteLess){ // no lesswhite
    // 验证token
    const TokenStore = useTokenStore()
    if(TokenStore.token && TokenStore.token !== ''){
      next()
    }else{
      next('/login')
    }

  }else{
    //白名单 放行
    next()
  }

})

export default Router
import routes from './routes'
import {createRouter,createWebHashHistory} from "vue-router";
import useTokenStore from "../store/tokenStore";

const Router = createRouter({
  routes,
  history:createWebHashHistory()
})
// 白名单权限控制
export const lessWhite =[
  '/login',
  '/register'
]
Router.beforeEach((to,from,next)=>{
  // console.log()
  let isWhiteLess = lessWhite.find((item)=>{return item === to.path})
  if(!isWhiteLess){ // no lesswhite
      // 验证token
      const TokenStore = useTokenStore()
      console.log(TokenStore.token)
    if(TokenStore.token && TokenStore.token !== ''){
      next()  // 放行 有token
    }else{
      next('/login')
    }

  }else{
  //   白名单 放行
    next()
  }



})

export default Router
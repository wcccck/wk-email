import axios from "axios";
import {lessWhite} from '../router/index'
import useTokenStore from '../store/tokenStore'
import {setToken} from "../utils/token";

const serve = axios.create({
  baseURL:"/api",
  timeout:1000
})


serve.interceptors.response.use((res)=>{
  return res
},
    err=>{
      const tokenStore = useTokenStore()
      console.log()
      if(err.response.data.code && err.response.data.code==401){
        tokenStore.token = ''
        setToken('')
        console.log(Router)
        Router.push('/login')
      }
  return err.response.data
})

serve.interceptors.request.use((config)=>{
  const tokenStore = useTokenStore()
  if(tokenStore.token){
    config.headers['token'] = tokenStore.token
  }
  return config
},(error)=>{
  return error
})
export default serve


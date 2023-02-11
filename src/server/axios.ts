import axios from "axios";

const serve = axios.create({
  baseURL:"/api",
  timeout:1000
})

serve.interceptors.response.use((res)=>{
  return res
},
    err=>{
  // console.log(err)
  return err.response.data
    })
export default serve


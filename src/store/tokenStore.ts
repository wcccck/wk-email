import {defineStore} from "pinia";
import {getToken} from "../utils/token";
console.log(getToken())
export default defineStore('token',{
  state(){
    return {
      token: getToken() || ''
    }
  }
})
import {defineStore} from "pinia";

export default defineStore('userInfo',{
  state(){
    return {
      userInfo:{}
    }
  },
  persist:{
    storage:window.localStorage
  }
})
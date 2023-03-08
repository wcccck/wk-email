import {defineStore} from "pinia";

export default defineStore('userInfo',{
  state(){
    return {
      userInfo:{},
      userFriend:[]
    }
  },
  persist:{
    storage:window.localStorage
  }
})
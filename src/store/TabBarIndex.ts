import {defineStore} from "pinia";

export default defineStore('activeIndex',{
  state(){
    return {
      activeIndex : 0
    }
  },
  persist:{
    storage:window.localStorage
  }
})
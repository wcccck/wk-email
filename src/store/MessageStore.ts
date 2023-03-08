import {defineStore} from "pinia";

const store = defineStore('MsgStore',{
  state(){
    return{
      currentMsgArr:[],
      MsgSSE:[],
      currentToId:0
    }
  },
  persist:{
    storage:window.localStorage
  }

})

export default store
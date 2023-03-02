import {defineStore} from "pinia";

const store = defineStore('MsgStore',{
  state(){
    return{
      currentMsgArr:[],
      MsgSSE:[],
      MsgInitArr:[],
      currentToId:0
    }
  },
  persist:{
    storage:window.localStorage
  }

})

export default store
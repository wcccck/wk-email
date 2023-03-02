import {defineComponent,onMounted} from "vue";
import {RouterView} from "vue-router";
import classes from './App.module.scss'

// import {io} from 'socket.io-client';
// const socket = io.connect('http://localhost:7777',{
//   extraHeaders: {
//     token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InMxbWxwZTEiLCJJZCI6MTYsImlhdCI6MTY3NzIwNjcyOCwiZXhwIjoxNjc3MjEwMzI4fQ.HL2xC00PEzrpQ-1437QnB6jwhudYspH5YomhXW790nY"
//   }
// });
// socket.on('news', function(data){
//   console.log(data);
//   socket.emit('my other event', {my: 'data'});
// });
export default defineComponent({
  setup(){
    return ()=> {
      return <div class={classes.main}>
        <RouterView />
      </div>
    }

  }
})
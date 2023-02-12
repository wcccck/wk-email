import {defineComponent} from "vue";
import classes from '../index.module.scss'
export default defineComponent({
  setup(){
    return ()=>{
      return <div class={classes.sideBar}>
        2
      </div>
    }
  }
})
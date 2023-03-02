import {defineComponent} from "vue";
import classes from "./profile.module.scss";
import Cell from "../../components/cell/Cell";
export default defineComponent({

  setup(props,context){
    return ()=>{
      return <div class={classes.container}><Cell title={'设置'}/></div>
    }
  }
})
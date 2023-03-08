import {defineComponent} from "vue";
import {RouterView} from "vue-router";
import classes from './App.module.scss'

export default defineComponent({
  setup(){
    return ()=> {
      return <div class={classes.main}>
        <RouterView />
      </div>
    }

  }
})
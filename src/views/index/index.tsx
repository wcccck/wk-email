import {defineComponent, ref,Transition} from "vue";
import {getIndexInfo} from '../../http/index'
import SideBar from "./sideBar/sideBar";

import classes from './index.module.scss'
export default defineComponent({
  setup(){

    const showBar = ref(false)
    getIndexInfo().then(res=>{
      console.log(res)
    })
    return ()=>{
      return (
        <div class={classes.main}>
          <Transition name={'fade'}>
            {showBar.value ? <SideBar/> : ''}
          </Transition>
          <button onClick={()=>{
            showBar.value = !showBar.value
            console.log(showBar.value)
          } }>show or none show or noneshow or noneshow or noneshow or none</button>
        </div>
      )
    }
  }
})
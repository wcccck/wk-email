import {defineComponent} from "vue";
import {RouterView} from "vue-router";
import classes from './App.module.scss'
import useTokenStore from './store/tokenStore'

export default defineComponent({
  setup(){
    const height = window.innerHeight
    const width = window.innerWidth
    const tokenStore = useTokenStore()
    console.log(tokenStore.token)
    return ()=><div class={classes.main} style={{height:height + 'px',width:width + 'px'}}>
      <RouterView></RouterView>
    </div>
  }
})
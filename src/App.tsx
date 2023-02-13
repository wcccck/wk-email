import {defineComponent} from "vue";
import {RouterView} from "vue-router";
import classes from './App.module.scss'
import useTokenStore from './store/tokenStore'
import Tabbar,{TabItem} from "./components/tabbar/tabbar";
export default defineComponent({
  setup(){
    const height = window.innerHeight
    const width = window.innerWidth
    const tokenStore = useTokenStore()
    console.log(tokenStore.token)
    return ()=><div class={classes.main} style={{height:height + 'px',width:width + 'px'}}>
      <RouterView></RouterView>
      <Tabbar >
        <TabItem title={'邮箱'} path={'/index'}></TabItem>
        <TabItem title={'个人'} path={'/profile'}></TabItem>
      </Tabbar>
    </div>
  }
})
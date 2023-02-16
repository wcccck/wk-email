import {defineComponent} from "vue";
import Tabbar, {TabItem} from "../../components/tabbar/tabbar";
import {RouterView} from "vue-router";
import classes from './layout.module.scss'
export default defineComponent({
  setup(props,context){
    return ()=>{
      return <div class={classes.layout}>
        <RouterView></RouterView>
        <Tabbar >
          <TabItem title={'邮箱'} path={'/layout/index'}></TabItem>
          <TabItem title={'个人'} path={'/layout/profile'}></TabItem>
        </Tabbar>
      </div>
    }
  }
})
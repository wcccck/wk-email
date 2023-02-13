import {defineComponent, PropType,computed} from "vue";
import {useRouter} from "vue-router";
import classes from '../index.module.scss'
import SideItem from "../../../components/sideItem/sideItem";
export type sideBarItem = {
  IconName:string,
  // IconColor:string,
  activeName:string,
  title:string
}
export default defineComponent({
  props:{
    sideItemArr:{
      type:Array as PropType<sideBarItem[]>
    }
  },
  setup(props,{emit}){
    const router = useRouter()

    return ()=>{
      return <div class={classes.sideBar}>
        {props.sideItemArr?.map((item,index)=>{
          return  <SideItem title={item.title} icon={item.IconName} activeName={item.activeName}  onMyClick={()=>{
            // console.log(item.activeName)
            router.push(`/index/${item.activeName}`)
            emit('closeSideBar')
          }}>
          </SideItem>
        })}


      </div>
    }
  }
})
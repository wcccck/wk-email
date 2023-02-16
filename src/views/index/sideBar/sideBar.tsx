import {defineComponent, PropType, computed, ref} from "vue";
import {useRouter} from "vue-router";
import Button from "../../../components/button/Button";
import classes from '../index.module.scss'
import SideItem from "../../../components/sideItem/sideItem";
import {setToken} from "../../../utils/token";

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
    let  userImage = ref('')
    import('./head.jpg').then(res=>{
      userImage.value = res.default
    })
    return ()=>{
      return (
        <div class={classes.sideBar}>
        <div class={classes.userInfo}>
          <div class={classes.InfoLeft}>
            <img src={userImage.value} alt="" class={classes.UserImage}/>
          </div>
          <div class={classes.InfoRight}>
            <div>username</div>
            <div>userId</div>
          </div>
          <div class={classes.InfoButton}>
            <Button onClick={()=>{
              setToken('')
              router.push('/login')
            } }>登出</Button>
            {/*<button></button>*/}
          </div>
        </div>
            {/*分割线------------------------------------*/}
        {props.sideItemArr?.map((item,index)=>{
          {/*@ts-ignore*/}
          return  <SideItem title={item.title} icon={item.IconName} activeName={item.activeName}  onMyClick={()=>{
            // console.log(item.activeName)
            router.push(`/layout/index/${item.activeName}`)
            emit('closeSideBar')
          }}>
          </SideItem>
        })}
      </div>

      )
    }
  }
})
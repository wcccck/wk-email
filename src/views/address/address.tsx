import {defineComponent, ref} from "vue";
import Cell from "../../components/cell/Cell";
import {getFriend} from '../../http/address'
import userStore from "../../store/UserStore";
import Icon from "../../components/Icon/Icon";
import classes from './address.module.scss'
export default defineComponent({
  setup(props,context){
    const user = userStore()
    // @ts-ignore
    const id = user.userInfo.id!
    const friendList = ref([])
    getFriend(id).then(res=>{
      friendList.value = res.data.data
      console.log(friendList.value)
    })
    return ()=>{
      return <div class={classes.container}>
        <div class={classes.header}>
          通讯录
          <Icon IconName={'addFriend'} size={'1.3rem'} class={classes.addFriend} onMyClick={()=>{
            console.log('2341')
          } }></Icon>
        </div>
        {friendList.value.map(item=>{
          return <Cell icon={'youxiang'} title={`${item.id}`} >
            {{
              left:()=>{
                return <div class={classes.cellLeftSlot}>
                  <img class={classes.headImage} src={'http://localhost/s1mple.jpg'}/>
                  <div class={classes.textContainer}>
                    <div style={{fontWeight:"800"}}>{item.friend_id}</div>
                    {/*<div>{item.createdAt}</div>*/}
                  </div>
                </div>
              }
            }}
            {/*{'jionio'}*/}
          </Cell>
        })}
      </div>
    }
  }
})
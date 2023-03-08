import {defineComponent, ref} from "vue";
import classes from './disvocer.module.scss'
import FriendCard from './components/FriendCard'
import List from "../../components/list/List";

let i = 0
function getData(){
  return new Promise((resolve, reject)=>{
    if(i>5) resolve('')
    setTimeout(()=>{
      i++;
      resolve([1,3])
    },1000)

  })
}
export default defineComponent({

  setup(props,context){
    const arr = ref([1,3,4,7,89,9,9,9,6,4])
    const ListLoad = ref(true)
    const finish = ref(false)
    async function loadFun() {
      console.log('loading...')
      const result= await getData()
      console.log(result)
      if(!result && result== ''){
        ListLoad.value = false
        finish.value = true
      }
      console.log(finish.value)
      result instanceof Array && arr.value.push(...result)
    }
    return ()=>{
      return <div class={[classes.container]} >
        <SelfHead></SelfHead>
        <List isLoad={ListLoad.value} loadFun={loadFun} finish={finish.value} reFresh={()=>{console.log('刷新')} }>
          {arr.value.map(item=>{
            return <FriendCard  imgUrl={'http://localhost/panda.jpg'}></FriendCard>
          })}
        </List>

      </div>
    }
  }
})

const SelfHead = ()=>{
  return <div>
    <div class={classes.headerBg} style={{backgroundImage:'url("http://localhost/head.jpg")'}}></div>
  </div>
}


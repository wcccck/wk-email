import {defineComponent,ref} from "vue";
import classes from './index.module.scss'
import {loginRequest} from '../../http/login'
import {setToken} from "../../utils/token";
import {useRoute, useRouter} from "vue-router";
export default defineComponent({
  setup(){
    const username = ref('')
    const password = ref('')
    const Router = useRouter()
    const clickEvent =  function (e:Event){
      if(username.value == '' || password.value== ''){
        alert('请输入')
      }else{
        loginRequest({username:'s1mlpe1',password:"caonima"}).then(res=>{
          if(res.code != 500){
            const {data} = res.data
            setToken(data.token)
            Router.push('/index')
          }else{
            alert(res.msg)
          }

        })
      }



    }

    return ()=>{
      console.log(username.value)
      return <div class={classes.container}>
        <div>{username.value}{password.value}</div>
        <header class={classes.header}>{'<'}</header>
        <h3>欢迎登录wk邮箱</h3>
        <div>
          <form action=""></form>
          <input v-model={username.value} type="text" placeholder={"请输入账号"} className={classes.userInput}/>
          <input v-model={password.value} type="password" placeholder={"输入密码"} className={classes.userInput}/>
        </div>
        <Button onMyClick={clickEvent} >我擦尼玛</Button>
      </div>
    }
  }

})

const Button = defineComponent({
  setup(props,context){
    const defaultSlot = context.slots.default
    const {emit} = context

    return ()=>{
      return <button onClick={(e)=>{
        emit('myClick',e)

      } } class={classes.button}>{defaultSlot?.()}</button>
    }
  }
})
import {defineComponent,ref} from "vue";
import classes from './index.module.scss'
import {loginRequest} from '../../http/login'
import {setToken} from "../../utils/token";
import {useRouter} from "vue-router";
import useToken from '../../store/tokenStore'
export default defineComponent({
  setup(){
    const username = ref('')
    const password = ref('')
    const Router = useRouter()
    const TokenStore = useToken()
    const clickEvent =  function (e:Event){
      if(username.value == '' || password.value== ''){
        alert('请输入')
      }else{
        loginRequest({username:'s1mlpe1',password:"caonima"}).then(res=>{
          if(res.data.code != 500){
            const {data} = res.data
            setToken(data.token)
            TokenStore.token = data.token
            Router.push('/layout/index')
          }else{
            alert(res.data.msg)
          }

        })
      }



    }
    return ()=>{

      return <div class={classes.container}>
        <div>{username.value}{password.value}</div>
        <header class={classes.header}>{'<'}</header>
        <h3>欢迎登录wk邮箱</h3>
        <div>
          <form action="">
            <input v-model={username.value} type="text" placeholder={"请输入账号"} class={classes.userInput}/>
            <input v-model={password.value} type="password" placeholder={"输入密码"} class={classes.userInput} autocomplete/>
          </form>

        </div>
        <Button onMyClick={clickEvent}>我擦尼玛</Button>
      </div>
    }
  }

})

export const Button = defineComponent({
  setup(props,context){
    const defaultSlot = context.slots.default
    const {emit} = context

    return ()=>{
      return <button onClick={(e)=>{
        emit('MyClick',e)

      } } class={classes.button}>{defaultSlot?.()}</button>
    }
  }
})
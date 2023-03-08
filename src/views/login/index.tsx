import {defineComponent,ref} from "vue";
import classes from './index.module.scss'
import {loginRequest} from '../../http/login'
import {setToken} from "../../utils/token";
import {useRouter} from "vue-router";
import useToken from '../../store/tokenStore'
import Input from "../../components/Input/Input";
import Icon from "../../components/Icon/Icon";
import useUserInfo from '../../store/UserStore'
export default defineComponent({
  setup(){
    const username = ref('')
    const password = ref('')
    const Router = useRouter()
    const TokenStore = useToken()
    const userInfo = useUserInfo()
    const clickEvent = async function (e:Event){
      if(username.value == '' || password.value== ''){
        alert('请输入')
      }else{
        const result = await loginRequest({username:username.value,password:password.value})
        if(result.data && result.data.code == 200){
          const {data} = result.data
          setToken(data.myToken)
          userInfo.userInfo = data
          TokenStore.token = data.myToken
          await Router.push('/layout/message')
        }else{
          alert(result.msg)
        }

      }
    }
    const InputType = ref('text')
    return ()=>{
      return <div class={classes.container}>
        <h2 class={classes.title}>登录</h2>
        <div>
          <form action="">
            <Input Model={username}>
              {{left:()=> <span>账号</span> }}
            </Input>
            <Input Model={password} inputType={InputType.value}>
              {{
                left:()=> <span>密码</span>,
                right:()=> <div>
                  {InputType.value == 'text' ?  <Icon IconName={'yincang'} size={'2rem'} onMyClick={(e)=>{
                    InputType.value = 'password'
                    console.log(2)
                  } }></Icon> : <Icon IconName={'show'} size={'2rem'} onMyClick={(e)=>{
                    InputType.value = 'text'
                    console.log(3)
                  }}></Icon>}

                </div>
              }}
            </Input>
          </form>

        </div>
        {/*@ts-ignore*/}
        <div style={{display:"flex",justifyContent:"center"}}><Button onMyClick={clickEvent}>login</Button></div>
      </div>
    }
  }

})

export const Button = defineComponent({
  setup(props,context){
    const defaultSlot = context.slots.default
    const {emit} = context

    return ()=>{
      return <button style={{fontSize:"40px"}} onTouchend={(e)=>{
        emit('MyClick',e)

      } } class={classes.button}>{defaultSlot?.()}</button>
    }
  }
})
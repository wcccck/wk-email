import {defineComponent} from "vue";
import classes from "./profile.module.scss";
import Cell from "../../components/cell/Cell";
import Icon from "../../components/Icon/Icon";
export default defineComponent({

  setup(props,context){
    return ()=>{
      return <div class={classes.container}>
        <div class={classes.header}>
          个人
        </div>
        <Cell title={'11'}>
          {{
            left:()=>{
              return <div style={{display:"flex",alignItems:"center",height:'100%'}}>头像</div>
            },
            right:()=>{
              return <div style={{display:"flex",alignItems:"center"}}>
                <img style={{height:'140px',borderRadius:"10px"}} src="http://localhost/s1mple.jpg" alt=""/>
              </div>
            }
          }}
        </Cell>
      </div>
    }
  }
})
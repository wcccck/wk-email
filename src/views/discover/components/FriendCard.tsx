import {defineComponent,ref} from "vue";
import classes from './FriendCard.module.scss'
export default defineComponent({
  props:{
    imgUrl:{
      type:String,
      required:true
    },
    cardInfo:{
      type:Object
    }
  },
  setup(props,context){
    return ()=>{
      return <div class={classes.container}>
        <div class={classes.left}>
          <img src={props.imgUrl} class={classes.Image}/>
        </div>

        <div class={classes.center}>
          <div>username</div>
          <div>MsgText</div>
          <div>img</div>
          <div>时间 + 评论按钮 + 点赞</div>
          <div>
            评论区
          </div>
        </div>

      </div>
    }
  }
})
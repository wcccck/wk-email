import {defineComponent} from "vue";

export default defineComponent({
  setup(props,context){
    return ()=>{
      return <div>
        i am line message
      </div>
    }
  }
})
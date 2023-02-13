import {defineComponent} from "vue";
// @ts-ignore
import MailCard from "@/components/mailCard/mailCard";
export default defineComponent({
  setup(){
    return ()=>{
      return <div>
        <MailCard headImage={''}></MailCard>
      </div>
    }
  }
})
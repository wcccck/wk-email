import serve from "../utils/axios";
export type MsgType ={
  from:string,
  to:string,
  msg:string,
  type:string,
  status:string
}
export function sendMessage(data:MsgType){
  return serve({
    data,
    method:"post",
    url:`/message`
  })
}

export function getReceiveMessage(id:number){
  return serve({
    method:"get",
    url:`/message/${id}`
  })
}
import serve from "../utils/axios";

export function getFriend(id:number){
  return serve({
    method:"GET",
    url:`/friend/${id}`
  })

}
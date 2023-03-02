import serve from "../utils/axios";

export function getIndexInfo(){
  return serve({
    url:"/index",
    method:"get"
  })
}
import serve from "../server/axios";

export function getIndexInfo(){
  return serve({
    url:"/index",
    method:"get"
  })
}
import serve from "../server/axios";

export const loginRequest = function (data:object){
  return serve({
    url:'/login',
    data,
    method:"POST"
  })
}
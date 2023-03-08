import serve from "../utils/axios";
export const loginRequest = function (data:object){
  return serve({
    url:'/login',
    data,
    method:"POST"
  })
}
export const getToken = function (){
  return localStorage.getItem('token')
}

export const setToken = function (JWt:string){
  localStorage.setItem('token',JWt)
}
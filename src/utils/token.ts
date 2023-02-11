export const getToken = function (){
  return localStorage.getItem('token')
}

export const setToken = function (JWt){
  localStorage.setItem('token',JWt)
}
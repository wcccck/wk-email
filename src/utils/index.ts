import {useWindowSize } from '@vueuse/core'

export const isMobile = function (){
  const {width,height} = useWindowSize()
  window.addEventListener('resize',()=>{
    console.log(width.value)
    // console.log(height.value)
  })
  return width.value > 667 ? false : true
}

export function throttle(cb:Function,time:number){
  let timer:boolean = true
  return function (){
    if(timer){
      timer = false
        cb(...arguments)
      setTimeout(()=>{
        timer = true
      },time)
    }
  }

}

export function debounce(cb:Function,time:number){
  let timerNu
  return function (){
    clearTimeout(timerNu)
    timerNu = setTimeout(()=>{
      cb(...arguments)
    },time)
  }
}

export function connectSSE(){
  const evtSource = new EventSource('http://localhost:7777/stream');

}

export function ArrTransitionObj(f:Function,arr:Array<any>):object{
  const length = arr.length
  for(let i = 0;i<length;i++){

  }

  return {}
}

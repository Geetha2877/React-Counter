import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [counter, setCounter] = useState(10)

 /* useEffect( ()=>{
    setTimeout(()=>{
      setCounter((p)=>{
          if(p<=0){
          return 0}

        return p-1
      })
    },1000)

  },[counter]
  )
*/



const counterStart=()=>{
  if(counter<=0){
    clearInterval(setCounter(0))
 }else{
  setInterval(()=>{
  if(counter>0){
  setCounter(counter=>counter-1)
  } 
},1000)
 }
}
const counterStop=()=>{
  clearInterval(setCounter(0))
}
  return (
   
    <div>
    <h1>{counter}</h1>
    <button onClick={counterStart}>START</button>
    <button onClick={counterStop}>STOP</button>
    
    </div>

  )
}

export default App

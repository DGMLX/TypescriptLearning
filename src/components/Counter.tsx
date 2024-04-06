import { useState } from "react"

function Counter() {

  const [cont,setCont] = useState(0)


  const increment = (cant:number = 1):void =>{
    setCont(cont + cant)
  }

  const decrement = (cant:number = 1):void =>{
    setCont(cont - cant)
  }

  return (
    <div className="mb-5">
      <h1 className="text-2xl">Contador: {cont}</h1>
      <button className="border border-yellow-950 rounded-md mr-2 p-1" onClick={()=>increment()}>+1</button>
      <button className="border border-yellow-950 rounded-md mr-2  p-1" onClick={()=>decrement()}>-1</button>
      <button className="border border-yellow-950 rounded-md mr-2  p-1" onClick={()=>increment(5)}>+5</button>
      <button className="border border-yellow-950 rounded-md mr-2  p-1" onClick={()=>decrement(5)}>-5</button>
      <button className="border border-yellow-950 rounded-md mr-2  p-1" onClick={()=>setCont(0)}>Reset</button>
    </div>
  )
}

export default Counter
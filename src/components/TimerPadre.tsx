import { useState } from "react"
import Timer from "./Timer"


const TimerPadre = () =>{
    
    const [milisegundos,setMilisegundos] = useState(1000)

    return(
        <>
        <p>Milisegundos: {milisegundos}</p>
        <button onClick={()=>setMilisegundos(1000)} className="border p-1 rounded-md border-blue-700 mr-4">1000</button>
        <button onClick={()=>setMilisegundos(2000)} className="border p-1 rounded-md border-blue-700">2000</button>
        <Timer milisegundos={milisegundos}/>
        </>
    )
}

export default TimerPadre
import { useEffect, useRef, useState } from "react"

type TimerArgs = {
    milisegundos:number
}

const Timer = ({milisegundos}:TimerArgs) =>{

    const [segundos,setSegundos] = useState(0)
    const ref = useRef<number>()

    useEffect(()=>{
        ref.current && clearInterval(ref.current)
        ref.current = setInterval(()=>setSegundos(s=>s+1),milisegundos)
    },[milisegundos])

    return(
        <div className="mt-5">
            <p className="mb-5">Timer: {segundos}</p>
            
        </div>
    )
}

export default Timer
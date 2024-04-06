import { useState } from "react"


interface Usuario {
    id:number
    nombre:string
    edad:number
    email:string
    confirmado:boolean
}

const User = () =>{

    const [user,setUser] = useState<Usuario>({
        id:0,
        nombre:"",
        edad:0,
        email:"",
        confirmado:false
    })
    const login = () =>{
        setUser({
            id:1,
            nombre:"Pepe",
            edad:12,
            email:"pepe@example.com",
            confirmado:true
        })
    }

    const logout = () =>{
        setUser({
            id:0,
            nombre:"",
            edad:0,
            email:"",
            confirmado:false
        })
    }

    return(
        <div className="mt-5 mb-5">
        <h1 className="text-2xl">Usuario</h1>
        <button  className="border border-yellow-950 rounded-md mr-2 p-1" onClick={()=>login()}>Login</button>
        <button className="border border-yellow-950 rounded-md mr-2 p-1"onClick={()=>logout()}>Logout</button>
        {user.id != 0 ? <pre>{JSON.stringify(user)}</pre> : "No hay usuario" }

        </div>
    )
}

export default User
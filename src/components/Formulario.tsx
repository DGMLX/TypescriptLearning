import React, { useState } from "react"


const Formulario = () =>{

    const [dataForm,setDataForm] = useState({nombre:"",email:"",password:"",enviado:false})
    const {nombre,email,password,enviado} = dataForm

    const handleChange = ({target} : React.ChangeEvent<HTMLInputElement>) =>{
        const {value,name} = target
        setDataForm({
            ...dataForm,
            [name]:value
        })
    }
    
    const enviarDatos = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        const {nombre,email,password} = dataForm
        if(nombre==="" || email === "" || password === ""){
            console.log("CAMPOS INVALIDOS")
            return
        }
        setDataForm({
            ...dataForm,
            enviado:true
        })
       
    }

    return(
        <div className="mt-5 mb-5">
            <h1 className="text-2xl">Formulario</h1>

            <form onSubmit={e=>enviarDatos(e)}>     
                <label>Nombre</label>
                <br />
                <input type="text" className="border border-slate-600" name="nombre" value={nombre} onChange={(e)=>handleChange(e)}/>
                <br />
                <label>Email</label>
                <br />
                <input type="email"  className="border border-slate-600" name="email" value={email} onChange={(e)=>handleChange(e)}/>
                <br />
                <label>Contraseña</label>
                <br />
                <input type="password" className="border border-slate-600" name="password" value={password} onChange={(e)=>handleChange(e)}/>
                <br />
                <button className="border border-yellow-950 rounded-md p-1" type="submit">Enviar</button>
            </form>
            <pre>{ enviado ? JSON.stringify(dataForm) : ""}</pre>
        </div>
    )
}

export default Formulario
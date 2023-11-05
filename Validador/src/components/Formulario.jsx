import { useState } from "react";


const Formulario = ({setError}) => {
    const [formData, SetFormData] = useState({
        name:"",
        email:"",
        password:"",
        confPass:"",
    })

    const validarDatos=(e)=>{
        e.preventDefault()
        const {name, email, password, confPass} =formData
        const validarDatos = !name || !email || !password|| !confPass
        const validarPass = password !== confPass
        

validarDatos ? 

setError({
    error: true,
    msg: "todos los campos son obligatorios matee desde el ternario >(",
    color: "warning"
}) 
:setError ( { 
error: false,
msg: "datos ingresados",
color: "success"
});

if (validarPass){
    setError({
        error: true,
        msg: "Contrasenias no coinciden",
        color: "danger"
    });
    return
}
SetFormData({
        name:"",
        email:"",
        password:"",
        confPass:"",
});

    }
 
    
const handleChange = (e)=>{
    SetFormData({...formData, [e.target.name] : e.target.value})

}

  return (
    <>
          <form className="formulario" onSubmit={(e)=>validarDatos(e)} >

        <div className="form-group">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Name"
            onChange={handleChange}
            value={formData.name}
          />
        </div>

        <div className="form-group">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Correo"
            onChange={handleChange}
            value={formData.email}
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="contraseña"
            onChange={handleChange}
            value={formData.password}
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            name="confPass"
            className="form-control"
            placeholder="confirmar contraseña"
            onChange={handleChange}
            value={formData.confPass}
          />
        </div>

        <button type="submit" className="btn btn-primary mt-4">
          Registrarse
        </button>
      </form>

    </>
  )
}

export default Formulario
import { useState } from "react";


const FormularioCopy = () => {
  //Estados del formulario
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [confPass, setconfPass] = useState("");
  const validarDatos=(e)=>{
    e.preventDefault()
    if(name==="" || email==="" || password===""|| confPass===""){
      alert("todos los campos son obligatorios mate")
      return
    }
  }
  const equalPass=()=>{
    if(password !== confPass){
      alert("contraseñas DISTIntAS")
      return
    }
  }

  return (
    <>
      <form className="formulario" onSubmit={validarDatos} >
        <div className="form-group" >
          
          <input
            type="text"
            name="nombre"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Name"
          />
        </div>
        <div className="form-group">       
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
          />
        </div>
        <div className="form-group">     
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={(e) => setpassword(e.target.value)}
            value={password}
            placeholder="Password"
          />
        
        </div>
        <div className="form-group">     
          <input
            type="password"
            name="password"
            className="form-control"
            onChange={(equalPass) => setconfPass(equalPass.target.value)}
            value={confPass}
            placeholder="Confirm Password"
            //*seguir trabajando en confirmacion//
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </>
  );
};

export default FormularioCopy;

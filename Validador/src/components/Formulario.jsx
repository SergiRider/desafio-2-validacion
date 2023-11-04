import React from "react";
import { useState } from "react";

const Formulario = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confPassword, setConfPass] = useState("")
  const validarInput = (e) => {
    e.preventDefault()
    if(name === '') {
        setError(true)
        return
        }
        setError(false)
    }
    
  return (
    <> 
    formulario componente
    <form onSubmit={validarInput}>
    {error ? <p className="error">Debes ingresar tu nombre</p> :
null}

        <h3>{name}</h3>
        <div className="form-group">
          <input
            className="form-control"
            name="Nombre"
            onChange={(e) => setName(e.target.value)}
          />
          <button className="btn btn-dark mt-3" type="submit">
            Enviar
          </button>
        </div>
      </form>
    </>
  );
};
export default Formulario;

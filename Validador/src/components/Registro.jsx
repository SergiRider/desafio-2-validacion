import React from 'react'
// import SocialButton from './SocialButton'
import Alert from './Alert'
import Formulario from './Formulario'

const Registro = ({error, setError}) => {
    
  return (
    
    <>
    <Alert error={error}/>
    <Formulario error= {error}
    setError={setError}/>    
    </>
  )
}

export default Registro
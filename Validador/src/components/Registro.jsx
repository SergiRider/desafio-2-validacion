import React from 'react'
import SocialButton from './SocialButton'
import Alert from './Alert'
import Formulario from './Formulario'
import Card from 'react-bootstrap/Card';

const Registro = ({error, setError}) => {
  console.log(error)

    
  return (
    
    <>
      <Alert error={error}/>
      
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Crea una cuenta</Card.Title>
        <Card.Text>
        <SocialButton github='true' instagram='true' facebook='true'/>  
      <Formulario error= {error}
      setError={setError}/> 
          </Card.Text> 
       
      </Card.Body>
    </Card>
      
    </>
  )
}

export default Registro
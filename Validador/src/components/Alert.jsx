import React from 'react'

const Alert = ({error}) => {
    


  return (
    <>
        {error ? (<div>todos los campos son obligatorios mate</div>): null}
    </>
  )
}

export default Alert
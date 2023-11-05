import React from 'react'

const Alert = ({error}) => {
  

  return (
    <>
    
        {error ? (<div className='mensajeAlerta' >{error.msg}</div>): null}
    </>
  )
}

export default Alert
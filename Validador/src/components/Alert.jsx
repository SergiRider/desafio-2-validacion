import React from 'react'
import SweetAlert from 'sweetalert2-react';


const Alert = ({error}) => {
  

  return (
    <>
    
        {error ? (<div>{error.msg}</div>): null}
    </>
  )
}

export default Alert
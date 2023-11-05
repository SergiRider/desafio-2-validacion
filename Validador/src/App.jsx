import { useState } from 'react'
import './App.css'
import Registro from './components/Registro'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [error, setError] = useState("")

  return (
    <>
      <body>
        <Registro 
        setError={setError}
        error={error}/>
      </body>
    </>
  )
}

export default App

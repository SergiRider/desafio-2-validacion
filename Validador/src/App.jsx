import { useState } from 'react'
import './App.css'
import Registro from './components/Registro'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [error, setError] = useState("")

  return (
    <>
      <Registro 
      setError={setError}
      error={error}/>
    </>
  )
}

export default App

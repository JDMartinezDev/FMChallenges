import { useState } from 'react'
import './App.css'
import { ThanskCard } from './components/ThanksCard'
import { ReportCard } from './components/ReportCard'

let grades = [1,2,3,4,5]



function App() {
  const [selected, setSelected] = useState(0)
  const [submited, setSubmited] = useState(false)

  const handleClick = (e) => {
    let value = parseInt(e.currentTarget.value)
    setSelected(value)
  }

  const handleSubmit = () =>{
    setSubmited(true)
  }

  return (
    <>
      { submited ? <ThanskCard  grade={selected}/> : <ReportCard grades={grades} handleSubmit={handleSubmit} handleClick={handleClick} selected={selected}/>}
    </>
  )
}

export default App

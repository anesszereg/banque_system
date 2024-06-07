import React, { useState } from 'react'
import './App.css'
import Retrait from './Components/Retrait'
import Depot from './Components/Depot'
import Recharge from './Components/Recharge'

function App() {
  const [credit, setCredit] = useState(10000)
  const getretrait = (montant) => {
    setCredit(credit - parseInt(montant))
  }
  const getdepot = (montant) => {
    setCredit(credit + parseInt(montant))
  }
  const getrecharge = (montant) => {
    setCredit(credit + parseInt(montant))
  }

  return (
    <>
      <h1>Banque</h1>
      <h2>Credit: {credit}</h2>
      <div className="container">
        <Retrait sendretrait={getretrait} />
        <Depot senddepot={getdepot} />
        <Recharge sendrecharge={getrecharge} />
      </div>
    </>
  )
}

export default App

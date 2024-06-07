import React, { useState } from 'react'

function Recharge({ sendrecharge }) {
  const [recharge, setRecharge] = useState(0)
  const handleclick = () => {
    console.log("Recharger")
    sendrecharge(recharge)
  }
  return (
    <div className='card'>
      <h3>Recharge</h3>
      <input type="number" placeholder="Montant" value={recharge} onChange={(e) => setRecharge(e.target.value)} />
      <button onClick={handleclick}>Recharger</button>
    </div>
  )
}

export default Recharge

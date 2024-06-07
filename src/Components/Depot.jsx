import React, { useState } from 'react'

function Depot({ senddepot }) {
  const [depot, setDepot] = useState(0)
  const handleclick = () => {
    console.log("Déposer")
    senddepot(depot)
  }
  return (
    <div className='card'>
      <h3>Dépot</h3>
      <input type="number" placeholder="Montant" value={depot} onChange={(e) => setDepot(e.target.value)} />
      <button onClick={handleclick}>Déposer</button>
    </div>
  )
}

export default Depot

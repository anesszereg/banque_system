import React, { useState } from 'react'

function Retrait( {sendretrait}) {
    const [retrait , setRetrait] = useState(0)
    const handleclick = () => {
        
        console.log("Retirer")
        sendretrait(retrait)
    }
  return (
    <div  className='card'>
        
        <h3>Retrait</h3>
        <input type="number" placeholder="Montant" value={retrait} onChange={(e)=>setRetrait(e.target.value)}/>
        <button onClick={handleclick}>Retirer</button>

    </div>
  )
}

export default Retrait
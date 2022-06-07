import React from 'react'

type Totalizers = {totalizers:[]}


const Totalizers = ({totalizers}:Totalizers) => {

  console.log("Informacion del TOTALES", totalizers)

  return (
    <div>
      <p>Tenemos x items en tu compra</p>
      <p>Total: X</p>
    </div>
  )
}

export default Totalizers

import React from 'react'

const ButtonGroup = () => {
  const redirect = () => {
    window.location.replace('/')
  }
  return (
    <>
      <div>
        <a href="/checkout/#/cart">CHECK OUT</a>
      </div>
      <div>
        <button onClick={redirect}>CONTINUA COMPRANDO</button>
      </div>
      <div>
        <a href="/cart">VER CARRITO</a>
      </div>
    </>
  )
}

export default ButtonGroup

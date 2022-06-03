import React from 'react'

type Props ={
  products:[]
}

const ProductGroup = ({products}:Props) => {
  console.log("Informacion de productos", products);
  return (
    <div>ProductGroup</div>
  )
}

export default ProductGroup

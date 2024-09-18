import React from 'react'

interface ProductProps {
  params: { productslug: string[] }
}

const ProductPage = ({ params: { productslug } }: ProductProps) => {
    console.log(productslug)
  return <div>ProductPage {productslug} </div>
}

export default ProductPage

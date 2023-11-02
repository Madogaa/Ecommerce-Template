import React from 'react'
import { products as initialProducts } from '../../mocks/products'
import ProductCard from './ProductCard/ProductCard'

function ProductsView() {
  return (
    <section className='grid grid-cols-[repeat(auto-fill,minmax(450px,1fr))] gap-2'>
      {initialProducts.map(product => (
        <ProductCard product={product} key={product.id} />
      ))}
    </section>
  )
}

export default ProductsView
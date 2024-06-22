import React from 'react'
import ProductCard from './Layout/productCard'
import Product1 from './Assests/product1.jpg'
import Product2 from './Assests/product2.jpg'
import Product3 from './Assests/product3.jpg'

const Products = () => {
  return (
    <div className='flex flex-col justify-center min-h-screen px-5 lg:px-32 bg-backgroundColor'>
        <h1 className='mb-8 text-4xl font-semibold text-center lg:mt-14 mt-024'>Our Products</h1>
        <div className='flex flex-col justify-center gap-12 lg:flex-row'>
              <ProductCard img={Product1} title="Nespresso"/>
              <ProductCard img={Product2} title="AeroPress"/>
              <ProductCard img={Product3} title="Chemex"/>
        </div>
      
    </div>
  )
}

export default Products

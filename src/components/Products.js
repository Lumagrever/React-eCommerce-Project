import React from 'react'
import ProductsCard from './ProductsCard'

const Products = () => {
  return (
    <div className='py-10'>
        <div className='flex flex-col items-center gap-4'>
            <h1 className='text-2x1 bg-black text-white py-2 w-80 text-center'>
                Productos
            </h1>
            <span className='w-20 h-[3px] bg-black'></span>
            <p className='max-2-[700px] text-gray-600 text-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quia.
            </p>
        </div>
        <div>
            <ProductsCard />
        </div>
    </div>
  )
}

export default Products
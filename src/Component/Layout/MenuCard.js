import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'

const MenuCard = (props) => {
  return (
    <div className='w-full p-3 bg-white rounded-lg lg:w-1/4'>
      <div>
        <img className='rounded-xl' src={props.img} alt='img'/>
      </div>
      <div className='pt-2 mt-5'>
        <div className='flex flex-row justify-between'>
        <h3 className='text-xl font-semibold'>{props.title}</h3>
        <h3 className='text-xl font-semibold'>{props.value}</h3>
        
      </div>
      <div className='flex flex-row justify-between mt-3'>
        <div className='flex gap-2'>
            <button className='px-3 text-sm transition-all border-2 rounded-lg border-brightColor bg-backgroundColor hover:text-brightColor'> Hot </button>
            <button className='px-3 text-sm transition-all border-2 rounded-lg border-brightColor bg-backgroundColor hover:text-brightColor'> Cold</button>
            
        </div>
        <span className='flex px-3 py-2 rounded-full cursor-pointer item-center bg-backgroundColor'>
            <FaShoppingCart size={20}/>
        </span>
      </div>
    </div>
    </div>
  )
}

export default MenuCard

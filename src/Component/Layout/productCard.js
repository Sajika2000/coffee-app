import React from 'react'
import { BsStarFill, BsStarHalf } from 'react-icons/bs'
import Button from './button'


const productCard = (props) => {
  return (
    <div className='w-full p-3 bg-white rounded-lg lg:w-1/4'>
        <img className='rounded-lg'  src={props.img} alt='img'/>
        <div className='flex flex-col items-center gap-3 mt-5'>
            <h2 className='text-xl font-semibold'>{props.title}</h2>
            <div className='flex'>
                <BsStarFill className='text-brightColor'/>
                <BsStarFill className='text-brightColor'/>
                <BsStarFill className='text-brightColor'/>
                <BsStarFill className='text-brightColor'/>
                <BsStarHalf className='text-brightColor'/>
            </div>
            <h3 className='text-lg font-semibold'>$15.99</h3>
            <Button title="ADD TO CARD" />
        </div>
      
    </div>
  )
}

export default productCard

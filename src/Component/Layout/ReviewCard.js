import React from 'react'
import {BsStarFill ,BsStarHalf } from 'react-icons/bs'
import { FaQuoteRight } from 'react-icons/fa'

const ReviewCard = (props) => {
  return (
    <div  className='flex flex-col w-full gap-5 p-3 bg-white rounded-lg lg:w-2/6'>
        <div className='flex flex-row justify-center item-center lg:justify-start'>
            <div className='w-1/4'>
                <img className='rounded-full' src={props.img}alt='img'/>
            </div>
            <div className='mx-3'>
                <h2 className='text-lg font-semibold'>{props.title}</h2>
                <div className='flex'>
                <BsStarFill className='text-brightColor'/>
                <BsStarFill className='text-brightColor'/>
                <BsStarFill className='text-brightColor'/>
                <BsStarFill className='text-brightColor'/>
                <BsStarHalf className='text-brightColor'/>
            </div>
            </div>
            <span className='ml-16'>
                <FaQuoteRight className='text-backgroundColor' size={42}/>
            </span>
        </div>
        <p>The Ethiopian Yirgacheffe coffee is outstanding! It has a vibrant and complex flavor profile with notes of citrus and floral undertones. The medium roast perfectly balances the bright acidity and smooth body. Each sip is a delightful experience, making it my go-to choice for a refreshing and aromatic cup of coffee.
             Highly recommend for anyone who appreciates high-quality, flavorful coffee!</p>
      
    </div>
  )
}

export default ReviewCard

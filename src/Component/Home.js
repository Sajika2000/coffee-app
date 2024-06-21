import React from 'react'
import Button from "../Component/Layout/button";
import HeroPng from './Assests/coffee2.png'


const Home = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between items-center lg:px-32 px-5 gap-10 bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E]'>
      <div className='space-y-4 wpfull lg:w-2/4 mt-14 lg:mt-0'>
        <h1 className='text-5xl font-semibold leading-tight text-center lg:text-start'>
            Start Your Day With A Cup Of Coffee
            </h1>
        <p className='font-semibold'>Boost your productivity and build your mood with a glass of coffee in the morning </p>
        <div className='flex flex-row gap-6'>
           <Button title= "ADD TO CART"/>
           <Button title= "MORE MENU"/>
        </div>
      </div>
      <div className='relative'>
        <img src={HeroPng} alt='HeroPng'/>
        <div className='absolute bg-white px-8 py-2 top-5 right-0 rounded-full shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]'>
            <h2 className='font-semibold'>14K</h2>
        </div>
        <div className='absolute bottom-0 px-8 py-2 bg-white rounded-full -left-10 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]'>
            <h2 className='font-semibold'>Cappuccio</h2>
        </div>
     
      </div>
              
        
    </div>
  )
}

export default Home
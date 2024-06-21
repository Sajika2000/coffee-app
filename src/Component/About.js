import React from 'react'
import img from './Assests/about.jpg'
import Button from './Layout/button'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen px-5 lg:px-32 bg-backgroundColor'>
      <h1 className='mt-24 mb-8 text-4xl font-semibold text-center lg:mt-14'>About Us</h1>

      <div className='flex flex-col items-center gap-5 lg:flex-row'>
        <div className='w-full lg:w-2/4'>
            <img className='rounded-lg' src={img} alt='img'/>
        </div>
        <div className='w-full p-4 space-y-3 lg:w-2/4'>
            <h2 className='text-3xl font-semibold'>What Makes Our Coffee Special?</h2>
            <p>
            Our coffee stands out for its exceptional quality, crafted from the finest beans 
            sourced from sustainable farms around the world. Each cup embodies a rich, aromatic blend, carefully roasted to perfection to 
            highlight the unique flavors and characteristics of each bean. 
            Our dedication to fair trade practices ensures that every sip supports ethical farming communities.
            </p>
            <p>
            From the moment the beans are harvested to the final pour, our meticulous attention to detail guarantees a premium coffee experience that delights
             the senses and warms the soul. Indulge in our coffee and taste the difference that passion and quality make.
            </p>
            <Button title= "Lern More"/>
        </div>
      </div>
    </div>
  )
}

export default About

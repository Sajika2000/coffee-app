import React from 'react'
import ReviewCard from './Layout/ReviewCard'
import Pic1 from './Assests/pic1.png'
import Pic2 from './Assests/pic2.png'
import Pic3 from './Assests/pic3.png'

const Review = () => {
  return (
    <div className='flex flex-col justify-center min-h-screen px-5 lg:px-32 bg-backgroundColor'>
        <h1 className='mt-24 text-4xl font-semibold text-center lg:mt-14'>Customer's Review</h1>
        <div className='flex flex-col justify-center gap-5 py-4 my-8 lg:flex-row'>
            <ReviewCard img={Pic1} title="Olivia Ava"/>
            <ReviewCard img={Pic2} title="Jhon Deo"/>
            <ReviewCard img={Pic3} title="Sofia Zoe"/>
        </div>
      
    </div>
  )
}

export default Review

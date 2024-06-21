import React from 'react'
import MenuCard from './Layout/MenuCard'
import img1 from './Assests/menu1.jpg'
import img2 from './Assests/menu2.jpg'
import img3 from './Assests/menu3.jpg'
import img4 from './Assests/menu4.jpg'
import img5 from './Assests/menu5.jpg'
import img6 from './Assests/menu6.jpg'

const Menu = () => {
  return (
    <div className='flex flex-col justify-center min-h-screen px-5 lg:px-32 bg-backgroundColor'>
      <h1  className="mt-24 mb-8 text-4xl font-semibold text-center ">Our Menu</h1>
      <div className='flex flex-wrap justify-center gap-8 pb-8'>
        <MenuCard img={img1} title="Espresso" />
        <MenuCard img={img2} title="Cappuccino" />
        <MenuCard img={img3} title="Latte" />
        <MenuCard img={img4} title="Americano" />
        <MenuCard img={img5} title="Macchiato" />
        <MenuCard img={img6} title="Doppio" />
      </div>
    </div>
  )
}

export default Menu

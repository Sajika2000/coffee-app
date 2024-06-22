import React from 'react';
import { Link } from 'react-scroll';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E] text-black rounded-t-3xl mt-8 md:mt-0'>
      <div className='flex flex-col justify-between p-8 px-5 md:flex-row md:px-32'>
        <div className='w-full md:w-1/4'>
          <h1 className='pb-4 text-xl font-semibold'>CafePulse</h1>
          <p className='text-sm'>
            Welcome to our coffee haven! Explore our aromatic brews, savor artisanal flavors, and discover the perfect roast to elevate your daily ritual.
          </p>
        </div>
        <div>
          <h1 className='pb-4 text-xl font-medium pt5 md:pt-0'>Links</h1>
          <nav className='flex flex-col gap-2'>
            <Link to="menu" spy={true} smooth={true} duration={500}>
              <span className='transition-all cursor-pointer hover:text-backgroundColor'>Menu</span>
            </Link>
            <Link to="about" spy={true} smooth={true} duration={500}>
              <span className='transition-all cursor-pointer hover:text-backgroundColor'>About Us</span>
            </Link>
            <Link to="products" spy={true} smooth={true} duration={500}>
              <span className='transition-all cursor-pointer hover:text-backgroundColor'>Products</span>
            </Link>
            <Link to="review" spy={true} smooth={true} duration={500}>
              <span className='transition-all cursor-pointer hover:text-backgroundColor'>Reviews</span>
            </Link>
          </nav>
        </div>
        <div>
          <h1 className='pb-4 text-xl font-medium pt5 md:pt-0'>Menu</h1>
          <nav className='flex flex-col gap-2'>
            <a className='transition-all cursor-pointer hover:text-backgroundColor'>Cappuccino</a>
            <a  className='transition-all cursor-pointer hover:text-backgroundColor'>Latte</a>
            <a className='transition-all cursor-pointer hover:text-backgroundColor'>Americano</a>
          </nav>
        </div>
        <div>
          <h1 className='pb-4 text-xl font-medium pt5 md:pt-0'>Contact Us</h1>
          <nav className='flex flex-col gap-2'>
            <a href='mailto:cafepulse@gmail.com' className='transition-all cursor-pointer hover:text-backgroundColor'>CafePulse@gmail.com</a>
            <a href='tel:+94772296066' className='transition-all cursor-pointer hover:text-backgroundColor'>+94 772 296 066</a>
            <div className='flex gap-4'>
              <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer' className='transition-all cursor-pointer hover:text-backgroundColor'>
                <FaFacebook size={24} />
              </a>
              <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer' className='transition-all cursor-pointer hover:text-backgroundColor'>
                <FaInstagram size={24} />
              </a>
              <a href='https://www.youtube.com' target='_blank' rel='noopener noreferrer' className='transition-all cursor-pointer hover:text-backgroundColor'>
                <FaYoutube size={24} />
              </a>
            </div>
          </nav>
        </div>
      </div>
      <div>
        <p className="py-4 text-center">
          @copyright developed by
          <span className="text-backgroundColor"> SD Coding</span> | All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;

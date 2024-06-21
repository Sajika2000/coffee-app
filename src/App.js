import React from 'react'
import Navbar from './Component/Navbar'
import './index.css';
import Home from './Component/Home';
import Menu from './Component/Menu';
import About from './Component/About';

const App = () => {
  return (
    <div >
      <Navbar/>
      <main>
        <div id='home'>
        <Home/>
        </div>
        <div id='menu'>
        <Menu/>
        </div>
        <div id='about'>
          <About/>
        </div>
      </main>
     
      
      
    </div>
  )
}

export default App

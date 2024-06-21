import React from 'react'
import Navbar from './Component/Navbar'
import './index.css';
import Home from './Component/Home';

const App = () => {
  return (
    <div >
      <Navbar/>
      <main>
        <div id='home'>
        <Home/>
        </div>
      </main>
     
      
      
    </div>
  )
}

export default App

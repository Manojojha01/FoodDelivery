import React, { useState } from 'react'
import {Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Componed/Navbar/Navbar'
import Home from './Pages/Home/Home'
import Card from './Pages/Card/Card'
import LoginPopup from './Componed/LoginPopup/LoginPopup'
import Footer from './Componed/Footer/Footer'
import Placeorder from './Pages/Placeorder/Placeorder'


function App() {
  
  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></> }

      <div className='App'>
        <Navbar setShowLogin={setShowLogin}/>
        
        <Routes>
          < Route path='/'
          element={ <Home /> } />
          < Route path='/Card'
          element={ <Card/> } />
          < Route path='/order'
          element={ <Placeorder/> } />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App

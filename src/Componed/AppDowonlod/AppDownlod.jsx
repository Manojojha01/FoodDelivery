import React from 'react'
import './AppDownlod.css'
import { assets } from '../../assets/assets'

const AppDownlod = () => {
  return (
    <div className='app-downlod' id='app-downlod'>
 <p>For better Exprince Downlod   <br />   Tomato App</p> 
     
   <div className="app-downlod-platforms">
    <img src={assets.play_store} alt="" />
    <img src={assets.app_store} alt="" />
   </div>
    </div>
  )
}

export default AppDownlod

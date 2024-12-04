import React, { useState } from 'react'
import './LoginPopup.css';
import { assets } from '../../assets/assets';

const LoginPopup = ({setShowLogin}) => {
    const[currState,setcurrState] =useState("Sing Up")
    
  return (
    <div className="login-popup">
        <from className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img className='cross-icon' onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState=="Login"?<></>:<input type="text" placeholder='type yor name' required/>}
             <input type='email' placeholder='Your email' required/>
             <input type="password"  placeholder='password' required/>
            </div> 
             <button>{currState==="sing Up"?"Createaccout":"Login"}</button>
            <div className="login-popup-condition">
            <input type="checkbox"  required/>
            <p>By continuing, i agree to the privcy policy.</p>
            </div>
            {currState==="Login"
            ? <p>Create a new account ? <span onClick={()=>setcurrState("Sing up")}> click here</span> </p>
            : <p>Already have an account ? <span onClick={()=>setcurrState("Login")}> Login here</span> </p>}
           
           
        </from>
        </div>
  )
}

export default LoginPopup

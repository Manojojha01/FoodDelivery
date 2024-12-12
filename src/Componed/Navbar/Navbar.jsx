import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context1/StoreContext'

const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState("menu");

    const {getTotalCardAmount}=useContext(StoreContext);
  return (
    <div className='navbar '>
     <Link to='/'> <img src={assets.logo} className="logo" alt="" /> </Link>
      <ul className="navbar-menu  ">
        <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</Link>
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
        <a href='#app-downlod' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
        <a href='#footer' onClick={()=>setMenu("contect-us")} className={menu==="contect-us"?"active":""}>contect-us</a>
      </ul>
      <div className="right-navbar">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
        <Link to='/card'>    <img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalCardAmount()===0?"":"dot"}>  </div>
        </div>
            <button onClick={()=>setShowLogin(true)}>sing in</button>       
      </div>
    </div>
  )
}

export default Navbar

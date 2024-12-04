import React, { useState } from 'react'
import './Home.css'
import Header from '../../Componed/Header/Header'
import Menu from '../../Componed/ExplorMenu/Menu'
import FoodDisplay from '../../Componed/FoodDisplay/FoodDisplay'
import AppDownlod from '../../Componed/AppDowonlod/AppDownlod'




const Home = () => {

  const[category,setCategory] = useState("All");

  return (
    <div>
      <Header />
      <Menu category={category} setCategory={setCategory} />
      <FoodDisplay category={category}/>
      <AppDownlod />  
    </div>
  )
}

export default Home

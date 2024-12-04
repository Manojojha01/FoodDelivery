import {useContext,useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context1/StoreContext'

const FoodItem = ({id,name,price,description,image}) => {

    
const {cardItems,addToCard,removeFromCard} = useContext(StoreContext)

  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img className='food-item-image' src={image} alt="" />
            {!cardItems[id]
            ?<img className='add' onClick={()=>addToCard(id)} src={assets.add_icon_white} alt='' />
                :<div className='food-item-counter'>
                    <img onClick={()=>removeFromCard(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cardItems[id]}</p>
                    <img onClick={()=>addToCard(id)} src={assets.add_icon_green} alt="" />
                     </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img className='ims' src={assets.rating_starts} alt="" />
            </div>
            <p className='food-item-desc'>{description}</p>
            <p className="food-item-price">
                &{price}
            </p>
        </div>
      
    </div>
  )
}

export default FoodItem
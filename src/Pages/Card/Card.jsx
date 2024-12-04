import React, { useContext } from 'react'
import './Card.css'
import  { StoreContext } from '../../context1/StoreContext'
import { useNavigate } from 'react-router-dom';




const Card = () => {
 
  const { cardItems, food_list, removeFormCard, getTotalCardAmount } = useContext(StoreContext);

  const  navigate = useNavigate();

  return (
    <div className="card">
      <div className="card-items">
        <div className="card-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Revome</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cardItems[item._id] > 0) {
            return (
              <div>
                <div className="card-item-title crad-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cardItems[item._id]}</p>
                  <p>${item.price * cardItems[item._id]}</p>
                  <p onClick={() => removeFormCard(item._id)} className='cross'>x</p>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
      <div className="card-bottom">
        <div className="card-totol">
          <h2> card Total</h2>
          <div>
            <div className="card-total-details">
              <p>subtotlal</p>
              <p>{getTotalCardAmount()}</p>
            </div>
            <hr />
            <div className="card-total-details">
              <p>Deliivry Fee</p>
              <p>${getTotalCardAmount()===0?0:17}</p>
            </div>
            <hr />
            <div className="card-total-details">
              <p>Total</p>
              <p>${getTotalCardAmount()===0?0:getTotalCardAmount()+17}</p>
            </div>
          </div>
          <button onClick={()=>navigate('/order')} className='card-total-button'>
              PROCEED TO CHECKOUT
            </button>
        </div>
        <div className="card0promocode">
          <div>
            <p>If you have a promocode, Enter it here</p>
          </div>
          <div className='card-promocode-input'>
            <input type="text" placeholder='promo code' />
          <button>Sumbit</button>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Card

import React, { useContext } from 'react'
import './Placeorder.css'
import { StoreContext } from '../../context1/StoreContext'


const Placeorder = () => {

    const {getTotalCardAmount} = useContext(StoreContext)
    
  return (
    <form className='place-order'>
        <div className="place-order-left">
            <p className="title">delvry infomation</p>
<div className="multi-filed">
    <input className='input12' type="text" placeholder='first name'/>
    <input className='input12' type="text" placeholder='last name'/>
</div>
<input className='input12' type="email" placeholder='email address'/>
<input className='input12' type="text" placeholder='street'/>
<div className="multi-filed">
    <input className='input12' type="text" placeholder='City'/>
    <input className='input' type="text" placeholder='state'/>
</div>
<div className="multi-filed">
    <input className='input12'  type="text" placeholder='Zip code'/>
    <input className='input12' type="text" placeholder='country'/>
</div>
<input className='input12' type="text"placeholder='phone' />
        </div>


        <div className="place-order-right">
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
          <button  className='card-total-button'>
              PROCEED TO PAYMENT
            </button>
        </div>
        </div>
    </form>
  )
}

export default Placeorder

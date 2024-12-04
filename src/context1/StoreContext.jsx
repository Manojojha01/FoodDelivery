import {createContext,useEffect,useState} from 'react';

import{food_list} from "../assets/assets";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cardItems,setCardItems]=useState({});
    const addToCard =(itemId) =>{
        if(!cardItems[itemId]){
            setCardItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
             setCardItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }
    const removeFromCard=(itemId)=>{
        setCardItems((prev)({...prev,[itemId]:prev[itemId]-1}))
    }
    const getTotalCardAmount=()=>{
        let totalAmount =0;
        for(const item in cardItems){
            if(cardItems[item]>0){
                let itemInfo=food_list.find((product)=>product._id === item);
            totalAmount += itemInfo.price* cardItems[item];
            }        
        }
        return totalAmount;
    }
   
useEffect(()=>{
    console.log(cardItems);
},[cardItems])
const contextValue={
   food_list,
   cardItems,
   setCardItems,
   addToCard,
   removeFromCard,
   getTotalCardAmount
   }
   return(
    <StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>
   )
}

export default StoreContextProvider

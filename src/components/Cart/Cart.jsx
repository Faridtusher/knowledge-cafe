/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Cart.css'

const Cart = (props) => {
   const cart = props.cart
   let itemName = '';
   let totalTime = 0;

   for(const item of cart){
      itemName = itemName + item.item_name + '\n';
      totalTime = totalTime + item.time;
   }
   
   return (
      <div className='cartContainer'>
         <div className='readingTime'>
            <h4>Total Reading Time : {totalTime} min</h4>
         </div>
         
         <div className='itemDetails'>
            <h3>Bookmark Blog : {cart.length}</h3>
            <p>
               {
                  itemName.split('\n').map((nameOfItem, index) => <p className='itemName' key={index}>{nameOfItem}</p>)
               }
            </p>
         </div>  
      </div>
   );
};

export default Cart;
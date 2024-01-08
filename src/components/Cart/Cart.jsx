/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Cart.css'

const Cart = (props) => {
   const cart = props.cart;
   console.log(cart)

   let itemName = ' ';
   let readingTime =0;
   for(const book of cart){
      itemName = itemName + book.item_name;
      readingTime = readingTime + book.time;
   }
   
   return (
      <div className='cartContainer'>
         <div className='readingTime'>
            <h4>Total Reading Time : {readingTime} min</h4>
         </div>

         <div className='itemDetails'>
            <h3>Bookmark Blog : {cart.length}</h3>
            <p className='itemName'>{itemName}</p>
         </div>  
      </div>
   );
};

export default Cart;
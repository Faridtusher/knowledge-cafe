// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';
import './Library.css'
import Cart from '../Cart/Cart';

const Library = () => {
   const [books, setBooks] = useState([]);
   useEffect(() =>{
      fetch('data.json')
      .then(res => res.json())
      .then(data => setBooks(data))
   }, [])

   const [cart, setCart] = useState([]);
   const handelAddToCart = (product) =>{
      const newCart = [...cart, product]
      setCart(newCart)
   }
   
   
   return (
      <div className='bookContainer'>
         <div className='featuresBook'>
            {
               books.map(book => <Books book={book} handelAddToCart={handelAddToCart} key={book.id}></Books>)
            }
         </div>


         <div className='cartContainer'>
            <Cart cart={cart}></Cart>
         </div>
      </div>
   );
};

export default Library;
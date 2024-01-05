// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';
import './Library.css'
import Cart from '../Cart/Cart';

const Library = () => {
   const [books, setBooks] = useState([]);
   useEffect(() =>{
      fetch('../../../public/data.json')
      .then(res => res.json())
      .then(data => setBooks(data))
   }, [])
   
   return (
      <div className='bookContainer'>
         <div className='featuresBook'>
            {
              
               books.map(book => <Books book={book} key={book.id}></Books>)
            }
         </div>


         <div className='cartContainer'>
            <Cart></Cart>
         </div>
         
      </div>
   );
};

export default Library;
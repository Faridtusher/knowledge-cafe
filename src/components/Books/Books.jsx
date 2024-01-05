// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Books.css'
// eslint-disable-next-line no-unused-vars
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons';


const Books = (props) => {

   // function myFunction() {
   //    alert("I am an alert box!");
   // }

   const myFunction = () =>{
      // eslint-disable-next-line react/prop-types
      console.log(props.book.author)
   }

   // eslint-disable-next-line react/prop-types
   const {cover_photo, author_img, item_name, time, author} = props.book
   // console.log(props.book)
   return (
      <div className='bookDescription'>
         <img className='itemImage' src={cover_photo} alt="image" />

         <div className='authorDescription'>
            <div className='authorName'>
               <img className='authorImg' src={author_img} alt="authorImage" />
               <div className='author'>
                  <h3>{author}</h3>
                  <p>June 14 (10 days ago)</p>
               </div>
            </div>
         
            <div>
               <p>{time} min to read <FontAwesomeIcon onClick={()=> myFunction()} icon={faBookBookmark} /></p>
            </div>
            
         </div>
         <h1>{item_name}</h1> 
         <p className='programming'>#Programming</p>
         
     
      </div>
   );
};

export default Books;
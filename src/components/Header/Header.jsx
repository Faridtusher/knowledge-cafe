// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Header.css'
import image from '../../img/img.jpg'

const Header = () => {
   return (
      <div>
         <nav className='header-container'>
            <h1>Knowledge Cafe</h1>
            <div className='nev-menu'>
               <a href="">Home</a>
               <a href="">About</a>
               <a href="">Contact</a>
               <img src={image} alt="" /> 
            </div>
         </nav>
         <hr />
      </div>
   );
};

export default Header;
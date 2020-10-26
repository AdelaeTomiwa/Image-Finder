import React, { Component } from 'react';
import Navbar from '../navbar/Navbar';
import Search from '../search/Search';

class Header extends Component {
   render() {
      return (
         <header>
            <Navbar />
            <div className='container'>
               <Search />
            </div>
         </header>
      );
   }
}

export default Header;

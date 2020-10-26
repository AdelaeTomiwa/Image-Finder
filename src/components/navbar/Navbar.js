import React, { Component } from 'react';

class Navbar extends Component {
   render() {
      return (
         <nav>
            <h2>Image Finder</h2>
            <ul>
               <li>Home</li>
               <li>Images</li>
               <li>About</li>
               <li>Contact</li>
            </ul>
         </nav>
      );
   }
}

export default Navbar;

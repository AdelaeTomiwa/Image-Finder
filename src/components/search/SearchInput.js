import React, { Component } from 'react';

class SearchInput extends Component {
   render() {
      return (
         <div className='search-input'>
            <div>
               <i className='fas fa-search'></i>
               <input
                  type='text'
                  onChange={this.props.inputChange}
                  placeholder='Search Images'
                  name={this.props.name}
                  value={this.props.value}
               />
            </div>
         </div>
      );
   }
}

export default SearchInput;

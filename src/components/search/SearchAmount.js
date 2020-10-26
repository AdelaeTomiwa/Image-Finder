import React, { Component } from 'react';

class SearchAmount extends Component {
   render() {
      return (
         <select
            value={this.props.amount}
            onChange={this.props.onAmountChange}
            id='select'
         >
            <option value='5'>5</option>
            <option value='10'>10</option>
            <option value='15'>15</option>
            <option value='30'>30</option>
            <option value='50'>50</option>
         </select>
      );
   }
}

export default SearchAmount;

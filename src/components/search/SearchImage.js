import React, { Component } from 'react';

class SearchImage extends Component {
   render() {
      const {
         views,
         downloads,
         imageURL,
         name,
         tags,
         likes,
         comments,
      } = this.props;
      return (
         <div className='search-result-div'>
            <img src={imageURL} alt='' />
            <div className='details'>
               <h3>{name}</h3>
               <h5>{tags}</h5>
               <h5>Views:{views}</h5>
               <h5>Downloads:{downloads}</h5>
               <div className='icons'>
                  <i className='fas fa-thumbs-up'>
                     {'  '}
                     {likes}
                  </i>
                  <i className='fas fa-comment-alt'>{comments}</i>
               </div>
            </div>
         </div>
      );
   }
}

export default SearchImage;

import React, { Component } from 'react';
import SearchImage from './SearchImage';
import SearchInput from './SearchInput';

class Search extends Component {
   state = {
      searchText: '',
      images: [],
      amount: 200,
      apiKey: '18852006-5890c0250b019448491340090',
      apiUrl: 'https://pixabay.com/api',
      content: '',
   };

   componentDidMount = () => {
      const { apiKey, apiUrl, content, amount } = this.state;
      fetch(
         `${apiUrl}/?key=${apiKey}&q=${content}&image_type=photo&per_page=${amount}`
      )
         .then((res) => res.json())
         .then((data) => this.setState({ images: data.hits }));
   };

   // Input Change Function
   inputChange = (e) => {
      const { apiKey, apiUrl, content } = this.state;

      const value = e.target.value;
      this.setState({ [e.target.name]: value }, () => {
         if (value === '') {
            fetch(`${apiUrl}/?key=${apiKey}&q=${content}&image_type=photo`)
               .then((res) => res.json())
               .then((data) => this.setState({ images: data.hits }));
         } else {
            fetch(`${apiUrl}/?key=${apiKey}&q=${content}&image_type=photo`)
               .then((res) => res.json())
               .then((data) =>
                  this.setState({ images: data.hits, content: value })
               );
         }
      });
   };

   render() {
      return (
         <div>
            <SearchInput
               value={this.state.searchText}
               name='searchText'
               inputChange={this.inputChange}
            />

            <div className='search-div'>
               {this.state.images.map((image) => (
                  <SearchImage
                     key={image.id}
                     views={image.views}
                     downloads={image.downloads}
                     imageURL={image.largeImageURL}
                     name={image.user}
                     likes={image.likes}
                     tags={image.tags}
                     comments={image.comments}
                  />
               ))}
            </div>
         </div>
      );
   }
}

export default Search;

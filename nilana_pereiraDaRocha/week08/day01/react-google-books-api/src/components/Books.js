import React, { Component } from 'react';
import axios from 'axios';

// async/await works with async functions 
// e.g api requests 
class Books extends Component {
  state = {
    books: [],
    title: '',
  };
  fetchBooksByTitle = async () => {
    const { title } = this.state;
    // if title is empty alert with message 'you should inform the book title'
    if (title === '') {
      alert('Your should inform the book title');
      return;
    };
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=title:${title}`);
    this.setState({ books: response.data.items })
  };

  handleInput = (event) => {
    this.setState({ title: event.target.value })
  }

  render() {
    const { books } = this.state;
    return (
      <div>
        <p>Books</p>
        <input type="search" placeholder="search by title" onInput={this.handleInput} />
        <button type="button" onClick={this.fetchBooksByTitle}>Search</button>
        <hr />
        {/* loop in react to add images */}
        {books.map((book) => <img src={book.volumeInfo.imageLinks.thumbnail} key={book.volumeInfo.imageLinks.thumbnail} />)}
      </div>


    )
  }
}




export default Books;

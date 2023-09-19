import React, { useState } from 'react';
import Header from '../Header/Header';
import './MainBlock.css';
import { useBook } from '../../store/useBook';

export default function MainBlock() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');
  const addBookToWishlist = useBook((state) => state.addBookToWishlist);

  const searchBooks = async () => {
    try {
      const url = `https://www.googleapis.com/books/v1/volumes?q=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      setBooks(data.items || []);
    } catch (error) {
      console.error('Error', error);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    searchBooks();
  };

  const handleAddToWishlist = (book) => {
    addBookToWishlist(book); 
  };

  return (
    <div className="main">
      <Header />
      <form
        className='form-group d-flex align-items-center justify-content-center mx-auto mb-4 Form'
        style={{ width: '80%' }}
        onSubmit={handleFormSubmit}
      >
        <input
          placeholder='Search for books'
          className="form-control form"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <div className="listBlock">
        {books.length > 0 ? (
          books.map((book) => (
            <div className="card" key={book.id}>
              <p onClick={() => handleAddToWishlist(book)}><span>♥</span> Wishlist</p>
              <p>{book.volumeInfo.title}</p>
              <p>{book.volumeInfo.publishedDate}</p>
              <p>{book.volumeInfo.authors}</p>
              <img
                className='img'
                src={
                  book.volumeInfo.imageLinks?.smallThumbnail ||
                  'https://via.placeholder.com/100x150'
                }
                alt=""
              />
              <textarea>{book.volumeInfo.description}</textarea>
            </div>
          ))
        ) : (
          <div className="col">
            <p>No books found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
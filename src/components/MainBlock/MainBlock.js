import React, { useState } from 'react';
import Header from '../Header/Header';
import './MainBlock.css';
import Booklists from '../BookLists/BookLists';
import SearchForn from '../SerachForm/SearchForm';

export default function MainBlock() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');
  const [activeBtn, setActiveBtn] = useState(false);

  const searchBooks = async () => {
    try {
      const url = `https://www.googleapis.com/books/v1/volumes?q=${query}:keyes&AIzaSyBEFmlKhVd6DlC8470CAXRQU7BlYjKW4Iw=AIzaSyBEFmlKhVd6DlC8470CAXRQU7BlYjKW4Iw`;
      const res = await fetch(url);
      const data = await res.json();
      setBooks(data.items || []);
    } catch (error) {
      console.error('Error', error);
    }
  };

  const handleFormSubmit = (e) => {
    setActiveBtn(true)
    e.preventDefault();
    searchBooks();
  };

  return (
    <div className="main">
      <Header />
      <div className="mainBlock">
        <div className="Block">
          <div className="searchBlock">
            <h1>Book finder</h1>
          <SearchForn handleFormSubmit={handleFormSubmit} setQuery={setQuery} query={query}/>
          </div>
          <div className="listBlockImg">
          <img className='imgList' src="https://book-finder-app-git-master-klebermrocha.vercel.app/static/media/home.3f4fc5b7.svg" alt="" />
        </div>
        </div>
        <div className="listBlockBooks">
        {books.length > 0 ? (
          books.map((book) => (
            <Booklists book={book} key={book.id} />
          ))
        ) : (
          <>
          {!activeBtn ? (''):(
          <div className="col">
          <p>No books found.</p>
        </div>)}
        </>
        )}
      </div>
      </div>
    </div>
  );
}

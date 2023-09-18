import React, { useState, useEffect } from 'react';
import './MainBlock.css'
export default function MainBlock(){
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState('');
    const [activeWish,setActiveWish] =useState(false);
    console.log(books)

    const searchMovies = async () => {
        setLoading(true);
        try {
          const url = `https://www.googleapis.com/books/v1/volumes?q=${query}:keyes&AIzaSyByx-UMdIGMjY8LP0DvIRSVMp4yfM-Q738=AIzaSyByx-UMdIGMjY8LP0DvIRSVMp4yfM-Q738`;
          const res = await fetch(url);
          const data = await res.json();
          setBooks(data.items); 
          setLoading(false);
        } catch (error) {
          console.error('Error', error);
          setLoading(false);
        }
      }
      const handleFormSubmit = (e) => {
        e.preventDefault(); 
        searchMovies(); 
      }
      const handleClick=()=>{
        setActiveWish(true)
    }
    let moviesToRender;
      moviesToRender =
        books.map((book) => (
          <div className="card">
              <p onClick={handleClick}>wishlist</p>
              <p>{book.volumeInfo.title}</p>
              <p>{book.volumeInfo.publishedDate}</p>
              <p>{book.volumeInfo.authors}</p>
              <img className='img' src={book.volumeInfo.imageLinks.smallThumbnail} alt="" />
              <textarea>{book.volumeInfo.description}</textarea>
          </div>
        ))
    return(
    <div className="main">
      <form
        className='form-group d-flex align-items-center justify-content-center mx-auto mb-4 Form'
        style={{ width: '80%' }}
        onSubmit={handleFormSubmit}
      >
        <input
          placeholder='search'
          className="form-control form"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button> 
      </form>
      <div className="listBlock">
          {moviesToRender}
          </div>
        </div>
    )
}
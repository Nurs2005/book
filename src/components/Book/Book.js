import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useBook } from "../../store/useBook";

import "./Book.css";
export default function Book({ book }) {
  const wishlist = useBook((state) => state.wishlist);
  const addBookToWishlist = useBook((state) => state.addBookToWishlist);
  const deleteBookFromWishlist = useBook((state) => state.deleteBook);

  const isBookInWishlist = wishlist.some(
    (wishedBook) => wishedBook.id === book.id
  );
  const urr = () => {
    const URL = book.saleInfo.buyLink;
    const ur = URL.indexOf('id=');
    const err = URL.substring(ur);
    const fullLink = `https://play.google.com/store/books/details?${err}`;
    window.location.href = fullLink;
  }
  const handleToggleWishlist = () => {
    if (isBookInWishlist) {
      deleteBookFromWishlist(book.id);
    } else {
      addBookToWishlist(book);
    }
  };
  return (
    <div className="card" key={book.id}>
      <div className="inCard">
      <strong className="bookTitle">{book.volumeInfo.title}</strong>
      <span>{book.volumeInfo.publishedDate}</span>
      <p>{book.volumeInfo.authors}</p>
        <img
          className="img"
          src={
            book.volumeInfo.imageLinks?.smallThumbnail ||
            "https://via.placeholder.com/100x150"
          }
          alt=""
        />
      <div className="text">
        <p>{book.volumeInfo.description}</p>
      </div>
      <button onClick={handleToggleWishlist} className="Btn">
        <svg
          style={{
            color: isBookInWishlist ? "red" : "blue",
          }}
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          color="gray"
          className="svg"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path>
        </svg>
        Wishlist
      </button>
      <a className="pUrl" onClick={urr}>Перейти на путь</a>
      </div>
    </div>
  );
}

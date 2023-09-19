
import React from 'react';
import { useBook } from '../../store/useBook';

export default function WishMainBlock() {
  const wishlist = useBook((state) => state.wishlist);

  return (
    <div className="">
      <h1>WishMainBlock</h1>
      <h2>Выбранные книги в Wishlist:</h2>
      {wishlist.length > 0 ? (
        wishlist.map((book) => (
          <div key={book.id}>
            <p>{book.volumeInfo.title}</p>
            <p>{book.volumeInfo.authors}</p>
            <p>{book.volumeInfo.publishedDate}</p>
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
        <p>Ваш wishlist пуст.</p>
      )}
    </div>
  );
}
import React from 'react';
import { useBook } from '../../store/useBook';
import Booklists from '../BookLists/BookLists';

export default function WishMainBlock() {
  const wishlist = useBook((state) => state.wishlist);

  return (
    <div className="">
      <h1>WishMainBlock</h1>
      <h2>Выбранные книги в Wishlist:</h2>
      {wishlist.length > 0 ? (
        wishlist.map((book) => (
          <Booklists key={book.id} book={book} isBookSaved/>
        ))
      ) : (
        <p>Ваш wishlist пуст.</p>
      )}
    </div>
  );
}
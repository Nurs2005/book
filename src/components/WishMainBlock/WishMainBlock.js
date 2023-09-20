import React from 'react';
import { useBook } from '../../store/useBook';
import Header from '../Header/Header';
import WishList from '../WishList/WishList';
import './WishMainBlock.css'
export default function WishMainBlock() {
  const wishlist = useBook((state) => state.wishlist);
  return (
    <div className="wishMainBlock">
      <Header/>
      <div className="wishBlock">
      <h1>Wishlist</h1>
      <img className='wishImg' src="https://book-finder-app-git-master-klebermrocha.vercel.app/static/media/book.bafa48d3.svg" alt="" />
      {wishlist.length > 0 ? (<h2>Your wishlist !</h2>):(<h2>No wishlist items yet</h2>)}
      <WishList wishlist={wishlist}/>
      </div>
    </div>
  );
}
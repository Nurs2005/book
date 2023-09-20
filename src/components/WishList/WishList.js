import Book from "../Book/Book"
import "./WishList.css"
export default function WishList({wishlist}){
    console.log(wishlist.length);
    return(
        <div className="wishList">
        {wishlist.length > 0 ? (
          wishlist.map((book) => (
            <Book key={book.id} book={book} isBookSaved/>
          ))
        ) : ('')}
        </div>
    )
}
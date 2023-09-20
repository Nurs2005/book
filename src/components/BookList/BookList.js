import Book from "../Book/Book"
import './BookList.css'
export default function BookList({books,activeBtn}){
    return(
        <div className="listBlockBooks">
        {books.length > 0 ? (
          books.map((book) => <Book book={book} key={book.id} />)
        ) : (
          <>
            {!activeBtn ? (
              ""
            ) : (
              <div className="col">
                <p>No books found.</p>
              </div>
            )}
          </>
        )}
      </div>
    )
}
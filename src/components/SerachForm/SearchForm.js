import './SearchForm.css'
export default function SearchForn({setQuery,handleFormSubmit,query}){
    return(
        <div className="formBlock">
        <form
        className='Form'
        style={{ width: '80%' }}
        onSubmit={handleFormSubmit}
      >
        <input
          placeholder='Search for books'
          className="input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className='btn' type="submit">Search</button>
      </form>
        </div>
    )
}
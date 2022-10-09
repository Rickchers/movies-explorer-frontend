import "./SearchForm.css";

function SearchForm() {
  return (
    <div className="search-form__wrapper" >
    <form name="search-form" className="search-form">
      <input
        required
        placeholder="Фильм"
        className="search-form__input"
        name="name"
        minLength="2"
        maxLength="60"
      />

      <button type="submit" className="search-form__submit-button">
        Поиск          
      </button>
    </form>
  </div>
  )
}

export default SearchForm;
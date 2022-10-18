import "./SearchForm.css";

function SearchForm(props) {
  // alert(props.shortsButtonActive);
  //const shortsButtonActive = false;
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
      
      <div className="search-form__shorts">
        
        <button
          // className="search-form__shorts-tumb"
          className={`${props.shortsButtonActive ? "search-form__shorts-tumb_active" : "search-form__shorts-tumb"}`}
          onClick={props.onClickShortsButton}
        ></button>
        
        <p className="search-form__shorts-name">Короткометражки</p>

      </div>

    </div>
  )
}

export default SearchForm;
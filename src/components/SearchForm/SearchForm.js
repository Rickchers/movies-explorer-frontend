import "./SearchForm.css";

function SearchForm(props) {

  function handleChangeInputContent(e) {
    props.setSearchInput(e.target.value);
  }

  return (
    <div className="search-form__wrapper" >

      <form
        name="search-form"
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault();
          props.handleFilter(props.cards);
        }}
      >
        
        <input
          onChange={handleChangeInputContent}
          required
          //value={props.inputValue || ''}
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
          className={`${props.shortsButtonActive ? "search-form__shorts-tumb_active" : "search-form__shorts-tumb"}`}
          onClick={props.onClickShortsButton}
        ></button>
        
        <p className="search-form__shorts-name">Короткометражки</p>

      </div>

    </div>
  )
}

export default SearchForm;
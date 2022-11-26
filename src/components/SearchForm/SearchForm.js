import { React, useState, useEffect } from "react";
import "./SearchForm.css";

function SearchForm(props) {
  
  const [isEmpty, setEmpty] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    isEmpty ? setErrorMessage("Нужно ввести ключевое слово") : setErrorMessage("");
  }, [isEmpty])

  useEffect(() => {
    console.log(props.filmsToRender.length);
    props.filmsToRender.length === 0 ? setErrorMessage("Ничего не найдено") : setErrorMessage("");
  }, [props.filmsToRender.length])

  
  function handleInput(e) {
    props.setSearchInput(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    
    if (props.searchInput.length === 0) {
      setEmpty(true);
    } else {
      setEmpty(false);
      props.handleFilter(props.arrayForSearching);
    }
  }

  return (
    <div className="search-form__wrapper" >

      <form
        noValidate
        name="search-form"
        className="search-form"

        onSubmit={submitHandler}
      >
        
        <input
          onChange={handleInput}
          required
          
          placeholder="Фильм"
          className="search-form__input"
          name="name"
          minLength="2"
          maxLength="60"
        />

        <button
          type="submit"
          className="search-form__submit-button">
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
      <div className="search-form__keyword-wrapper">
        <p className="search-form__keyword">{errorMessage}</p>
      </div>

    </div>
  )
}

export default SearchForm;
import { React } from "react";
import { useLocation } from 'react-router-dom';

import "./SearchForm.css";

function SearchForm(props) {  
  const location = useLocation();
  let searchInput;
 
  function handleInput(e) {
    props.setSearchInput(e.target.value);
  }

  function submitHandler(e) {
    e.preventDefault();
    
    if (props.searchInput.length === 0) {
      
      props.setErrorMessage("Нужно ввести ключевое слово")
      
      
    } else {
      props.setErrorMessage("");
      props.handleFilter();
    }
  }

 location.pathname === "/movies" ? searchInput = JSON.parse(localStorage.getItem("searchInput")) : searchInput = ""
  
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
          
          defaultValue={searchInput}
          
          required
          type="text"
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
        <p className="search-form__keyword">{props.errorMessage}</p>
      </div>

    </div>
  )
}

export default SearchForm;
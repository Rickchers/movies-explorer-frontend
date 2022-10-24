import "./SearchForm.css";

import React, { useState } from "react";

function SearchForm(props) {
  
  const [input, setInput] = useState("");

  function handleChangeInputContent(e) {
    setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onSearch(input);
  }

  return (
    <div className="search-form__wrapper" >

      <form
        name="search-form"
        className="search-form"
        onSubmit={handleSubmit}
      >
        
        <input
          onChange={handleChangeInputContent}
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
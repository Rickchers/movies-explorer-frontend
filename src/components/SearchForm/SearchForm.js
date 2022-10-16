import "./SearchForm.css";
import tumb from "../../images/tumb.svg";

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
      
      <div className="search-form__shorts">
        
        <img
          className="search-form__shorts-tumb"
          src={tumb}
          alt=""
        />
        
        <p className="search-form__shorts-name">Короткометражки</p>

      </div>

    </div>
  )
}

export default SearchForm;
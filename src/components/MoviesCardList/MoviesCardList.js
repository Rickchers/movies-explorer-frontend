import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard"
import SearchForm from "../SearchForm/SearchForm"

function MoviesCardList(props) {
  return (
    <div className="moviescardlist__wrapper">
      <SearchForm />
      <section className="moviescardlist">
        {props.cards.map((card, i) => {
          return (
            <MoviesCard
              link={card}
            />
          )
        })}
      </section>
      
    </div>
    
  );  
}

export default MoviesCardList;
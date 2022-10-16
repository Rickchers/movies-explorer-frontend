import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard"
import SearchForm from "../SearchForm/SearchForm"

function MoviesCardList(props) {
  return (
    <div>
      <SearchForm />
      <div className="moviescardlist__wrapper">
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
    </div>  
    
    
  );  
}

export default MoviesCardList;
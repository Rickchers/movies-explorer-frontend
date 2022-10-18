import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard"
import SearchForm from "../SearchForm/SearchForm"

function MoviesCardList(props) {
  // alert (props.shortsButtonActive);
  return (
    <section>
      <SearchForm
       onClickShortsButton={props.onClickShortsButton}
       shortsButtonActive={props.shortsButtonActive}
      />
      <div className="moviescardlist__wrapper">
        <section className="moviescardlist">
          {props.cards.map((card, i) => {
            return (
              <ul  className="moviescardlist__list">
                <li>
                  <MoviesCard
                    link={card}
                    buttonTypeClose={props.buttonTypeClose}
                    onClickCloseIcon={props.onClickCloseIcon}
                    moviecardClosed={props.moviecardClosed}
                    
                  />                
                </li>
              </ul>
            )
          })}
        </section>        
      </div>
    </section>  
    
    
  );  
}

export default MoviesCardList;
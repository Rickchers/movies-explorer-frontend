

import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard"
import SearchForm from "../SearchForm/SearchForm"

function MoviesCardList(props) {
  
  //console.log(props.isLiked);
  //console.log(props.movieCards[0].id);
  return (
    <section>
      <SearchForm
       onClickShortsButton={props.onClickShortsButton}
       shortsButtonActive={props.shortsButtonActive}
       onSearch={props.onSearch}
      />
      <div className="moviescardlist__wrapper">
        <ul className="moviescardlist">
          {props.movieCards.map((movieCard, i) => {
            
            return (
              <li key={movieCard.id} className="moviescardlist__list">
                
                  <MoviesCard
                    
                    ref={props.likeRef}
                    movieCard={movieCard}
                    buttonTypeClose={props.buttonTypeClose}
                    onClickCloseIcon={props.onClickCloseIcon}
                    moviecardClosed={props.moviecardClosed}
                    isLiked={props.isLiked}
                    // onClickLiked={props.onClickLiked}
                    onMovieCardLike={props.onMovieCardLike}                  
                  />                
               </li>
                
            )
            
            
          })}
        </ul>        
      </div>
    </section>  
    
    
  );  
}

export default MoviesCardList;
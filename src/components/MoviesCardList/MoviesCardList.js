

import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard"
import SearchForm from "../SearchForm/SearchForm"

function MoviesCardList(props) {
  return (
    <section>
      <SearchForm
        onClickShortsButton={props.onClickShortsButton}
        shortsButtonActive={props.shortsButtonActive}

        onSearch={props.onSearch}
        setSearchInput={props.setSearchInput}

        //поиск фильма
        handleFilter={props.handleFilter}

        //
        cards={props.cards}
      />
      <div className="moviescardlist__wrapper">
        <ul className="moviescardlist">
          {props.filteredBeatFilms.slice(0, 3).map((movieCard, i) => {
            
            return (
              <li key={i} className="moviescardlist__list">
                
                  <MoviesCard
                    
                    movieCard={movieCard}

                    buttonTypeClose={props.buttonTypeClose}
                    onClickCloseIcon={props.onClickCloseIcon}
                    moviecardClosed={props.moviecardClosed}
                    
                    
                    //добавление/удаление фильма
                    onAddMovie={props.onAddMovie} 
                    onDelMovie={props.onDelMovie}  
                    
                    //результат поиска по запросу
                    filteredBeatFilms={props.filteredBeatFilms}
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
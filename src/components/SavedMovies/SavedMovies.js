import image1 from "../../images/movies_pics0.png";
import image2 from "../../images/movies_pics1.png";
import image3 from "../../images/movies_pics2.png";

import MoviesCardList from "../MoviesCardList/MoviesCardList";

import "./SavedMovies.css";


const cards = [image1, image2, image3];

function SavedMovies(props) {
  // alert (props.moviecardClosed);
  return (
    <div className="savedmovies__wrapper">
      <MoviesCardList
        cards={cards}
        buttonTypeClose={props.buttonTypeClose}
        onClickCloseIcon={props.onClickCloseIcon}
        moviecardClosed={props.moviecardClosed}
        
        onClickShortsButton={props.onClickShortsButton}
        shortsButtonActive={props.shortsButtonActive}
      />
    </div>
  )
}

export default SavedMovies;
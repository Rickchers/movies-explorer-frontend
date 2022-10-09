import image1 from "../../images/movies_pics0.png";
import image2 from "../../images/movies_pics1.png";
import image3 from "../../images/movies_pics2.png";

import MoviesCardList from "../MoviesCardList/MoviesCardList";


const cards = [image1, image2, image3];

function SavedMovies() {
  return (
    <MoviesCardList cards={cards}/>
  )
}

export default SavedMovies;
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./Movies.css";

import image1 from "../../images/movies_pics0.png";
import image2 from "../../images/movies_pics1.png";
import image3 from "../../images/movies_pics2.png";
import image4 from "../../images/movies_pics3.png";
import image5 from "../../images/movies_pics4.png";
import image6 from "../../images/movies_pics5.png";
import image7 from "../../images/movies_pics6.png";
import image8 from "../../images/movies_pics7.png";
import image9 from "../../images/movies_pics8.png";
import image10 from "../../images/movies_pics9.png";
import image11 from "../../images/movies_pics10.png";
import image12 from "../../images/movies_pics11.png";

const cards = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
];

function Movies(props) {
  return (
    <main>
      
      <div className="movies__wrapper">
        <MoviesCardList
          cards={cards}
          buttonTypeClose={props.buttonTypeClose}
          
          onClickShortsButton={props.onClickShortsButton}
          shortsButtonActive={props.shortsButtonActive}
        />
        <div className="movies__button-wrapper">
          <button type="button" className="movies__button-more">Ещё</button>
        </div>
      </div>

    </main>
  );
}

export default Movies;

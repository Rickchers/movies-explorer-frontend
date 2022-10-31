import './App.css';
import Main from "../Main/Main"
import Movies from "../Movies/Movies";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Notfound from '../Notfound/Notfound';
// import Preloader from "../Preloader/Preloader";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

//API
import * as mainApi from "../../utils/MainApi";
import { moviesApi } from "../../utils/MoviesApi";

import { CurrentUserContext } from "../contexts/CurrentUserContext.js";


import { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";


function App() {
  // const [isLoaded, setLoaded] = useState(true);
  const [isMoviecardClosed, setMoviecardClosed] = useState(false);
  
  const [isShorts, setShorts] = useState(false);
  
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});  
  
  //поиск по фильмам BeatFilms
  const [filteredBeatFilms, setFilteredBeatFilms] = useState([]);  
  const [searchInput, setSearchInput] = useState([]);
  
  //все карточки BeatFilms  
  const [cards, setCards] = useState([]);

  const history = useHistory();
 
  function handleCloseMoviecard() {    
    setMoviecardClosed(true);
  }

  function handleShorts() {
    setShorts(!isShorts);
  }

  function handleUpdateUser(name, email) {
    
    mainApi.setUserData(name, email).then((result) => {
      setCurrentUser(result);
    })
    .catch((err) => console.log(err));
  }

  function goBack() {
    history.goBack();
  }


  //====================mainApi==========================
  // регистрация
  function handleRegister(name, email, password) {
    mainApi.register(name, email, password).then(
      (res) => {
        //setIsRegister(true);
        history.push("/signin");
      },
      (err) => {
        //handleInfoTooltip();
      })
      .catch((err) => console.log(err));
  }
  // логин
  function handleLogin(email, password) {
    mainApi
      .authorize(email, password)
      .then(() => {
        setLoggedIn(true);
        history.push("/movies");
      })
      .catch((err) => console.log(err));
  }
  // выход
  function handleSignOut() {
    localStorage.removeItem("token");
    setLoggedIn(false);
    history.push("/");
  }  

  useEffect(() => {
    tokenCheck();
  }, []);

  // проверка токена
  function tokenCheck() {
    const token = localStorage.getItem("token");
    
    if (token) {
      mainApi.getContent(token).then((res) => {    
        //console.log(res);    
        if (res) {
          setLoggedIn(true);
          setCurrentUser(res);
          //history.push("/");
        }
      })
      .catch((err) => {
        console.log(err);        
      });
    }
  }

  // useEffect(() => {
  //   setFilteredBeatFilms(JSON.parse(localStorage.getItem("filteredBeatFilms")));
    

  // }, []);

  // получаем массив BeatFilms
  useEffect(() => {
    moviesApi.getMovies()
    .then((res) => {
      setCards(res);
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);
  
  // получаем массив сохраненных фильмов
  useEffect(() => {
    mainApi
      .getMovies()    
      .then((res) => {
        setFilteredBeatFilms(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  //сохранить карточку в базе
  function addMovie(movieCard) {
    mainApi
      .saveMovie(movieCard)
      .then((newMovieCard) => {
        setFilteredBeatFilms([...filteredBeatFilms, newMovieCard]);
      })
      .then(console.log(filteredBeatFilms))
      .catch((err) => console.log(err)); 
  }

  //удалить карточку из базы
  function deleteMovie(movieCard) {
    const savedMovie = filteredBeatFilms.find((item) => item.movieId === movieCard.id);
    //console.log(savedMovie._id);
      
    mainApi
      .deleteMovie(savedMovie._id)
      .then((res) => {
        //console.log(res);
        //setFilteredBeatFilms(filteredBeatFilms.filter((item) => item._id !== res._id));

        //console.log(savedMoviesArr);
      })
      .catch((err) => console.log(err));
  }


  
  //фильтруем BeatFilms
  function handleMoviesFilter(arrayBeatFilms) {
    // console.log(searchInput);
    console.log(arrayBeatFilms);

    const inputLowerCase = searchInput.toLowerCase().trim();

    const searchResult = arrayBeatFilms.filter((movie) => {
      const movieNameRU = movie.nameRU.toLowerCase().trim();
      return movieNameRU.indexOf(inputLowerCase) > -1;
    });
    console.log(searchResult);

    localStorage.setItem("filteredBeatFilms", JSON.stringify(searchResult));
    setFilteredBeatFilms(JSON.parse(localStorage.getItem("filteredBeatFilms")));
    
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">

          
          <Switch>

            <Route exact path="/">
              <Header isLoggedIn={isLoggedIn}/>
              <Main />
              <Footer />            
            </Route>

            <ProtectedRoute
              path="/movies"
              isLoggedIn={true}
              component={Movies}

              //savedMoviesArr={savedMoviesArr}

              buttonTypeClose={false}              
              shortsButtonActive={isShorts}
              onClickShortsButton={handleShorts}
              
              //добавление/удаление фильма
              onAddMovie={addMovie}
              onDelMovie={deleteMovie}

              //поиск фильма
              handleFilter={handleMoviesFilter}
              //movieCards={findedMovies}
              setSearchInput={setSearchInput}

              //
              cards={cards}
              filteredBeatFilms={filteredBeatFilms}
            /> 

            <Route path="/saved-movies">
              <Header
                isLoggedIn={true}
              />
              <SavedMovies
                buttonTypeClose={true}
                
                onClickCloseIcon={handleCloseMoviecard}
                moviecardClosed={isMoviecardClosed}

                shortsButtonActive={isShorts}
                onClickShortsButton={handleShorts}
              />
              <Footer />
            </Route>

            <Route path="/signup">
              <Register
                onRegister={handleRegister}
              />
            </Route>

            <Route path="/signin">
              <Login
                onLogin={handleLogin}
              />
            </Route>

            <Route path="/profile">

              <Header
                isLoggedIn={isLoggedIn}
              />

              <Profile
                currentUser={currentUser}
                onSignOut={handleSignOut}
                onUpdateUser={handleUpdateUser}
              />
            </Route>

            <Route path="*">
              <Notfound
                goBack={goBack}
              />            
            </Route>

          </Switch>
      </div>

    </CurrentUserContext.Provider>
  );
}

export default App;

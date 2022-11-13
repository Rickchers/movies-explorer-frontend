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

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

//API
import * as mainApi from "../../utils/MainApi";
import { moviesApi } from "../../utils/MoviesApi";

import { CurrentUserContext } from "../contexts/CurrentUserContext.js";


import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";


function App() {
  
  const history = useHistory();
  

  const [isShorts, setShorts] = useState(false);
  
  //состояние прелоадера
  const [loading, setLoading] = useState(false);
  
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  
  //=====================
  const [savedFilms, setSavedFilms] = useState([]);
  
  //поиск по фильмам BeatFilms
  const [filteredBeatFilms, setFilteredBeatFilms] = useState([]);  
  const [searchInput, setSearchInput] = useState([]);
  
  //все карточки BeatFilms  
  const [cards, setCards] = useState([]);

  const [total, setTotal] = useState(3);

  // изменение количества выдачи резултата поиска
  function handleTotal() {    
    setTotal(total+3);
  }

 
  //изменение состояния переключателя короткометражек
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
  // получаем массив BeatFilms
  useEffect(() => {
    setLoading(true);
    moviesApi.getMovies()
    .then((res) => {
      setCards(res);
    })
    .then(() => setLoading(false))
    .catch((err) => {
      console.log(err);
    });
  }, []);

 // получаем результаты поискового запроса, сохраненные в локальном хранилище
  // useEffect(() => {
  //   setFilteredBeatFilms(JSON.parse(localStorage.getItem("filteredBeatFilms")));
  //   console.log(JSON.parse(localStorage.getItem("filteredBeatFilms")));
  // }, []);

  
  //получаем массив сохраненных фильмов
  useEffect(() => {
    mainApi
      .getMovies()    
      .then((res) => {
        setSavedFilms(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  
  //===================================================================


  //сохранить карточку в базе
  function addMovie(movieCard) {
    // console.log('add');
    // console.log(movieCard);
    
    mainApi
      .saveMovie(movieCard)
      .then((newMovieCard) => {
        setSavedFilms([...savedFilms, newMovieCard]);
        
      })
      .then(console.log(savedFilms))
      .catch((err) => console.log(err));
     
  }
  //удалить карточку из базы
  function findCardId(c){
    const findedCard = savedFilms.find((item) => item.movieId === c.id);
    return findedCard;
  }

  function deleteMovie(movieCard) {  
    mainApi
      .deleteMovie(findCardId(movieCard)._id)
      .then(res => setSavedFilms(savedFilms.filter((item) => item._id !== res._id)))
      .catch((err) => console.log(err));
  }

  function deleteMovieFromSaved(movieCard) {  
    mainApi
      .deleteMovie(movieCard._id)
      .then(res => setSavedFilms(savedFilms.filter((item) => item._id !== res._id)))
      .catch((err) => console.log(err));
  }


  //полезный эффект
  useEffect(() => {
    console.log(isShorts);
    //setFilteredBeatFilms([]);
  }, [isShorts]);

  
  //фильтруем BeatFilms
  function handleMoviesFilter(arrayBeatFilms) {
    // console.log(searchInput);
    console.log(arrayBeatFilms);

    const inputLowerCase = searchInput.toLowerCase().trim();
    if (!isShorts) {
      const searchResult = arrayBeatFilms.filter((movie) => {
      const movieNameRU = movie.nameRU.toLowerCase().trim();
      return movieNameRU.indexOf(inputLowerCase) > -1;});
      localStorage.setItem("filteredBeatFilms", JSON.stringify(searchResult));
      setFilteredBeatFilms(JSON.parse(localStorage.getItem("filteredBeatFilms")));
    } else if (isShorts) {
      const searchResult = arrayBeatFilms.filter((movie) => {      
      const movieNameRU = movie.nameRU.toLowerCase().trim();
      return movieNameRU.indexOf(inputLowerCase) > -1 && movie.duration < 40;});
      localStorage.setItem("filteredBeatFilms", JSON.stringify(searchResult));
      setFilteredBeatFilms(JSON.parse(localStorage.getItem("filteredBeatFilms")));
    }
    
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
              loading={loading}

              component={Movies}

              
              total={total}
              handleTotal={handleTotal}
              
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
              filmsToRender={filteredBeatFilms}
              savedFilms = {savedFilms}
            /> 

            <Route path="/saved-movies">
              <Header
                isLoggedIn={true}
              />
              <SavedMovies
                filmsToRender = {savedFilms}
                onDelFromSaved={deleteMovieFromSaved}
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

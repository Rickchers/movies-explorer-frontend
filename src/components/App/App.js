import React, { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
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


function App() {

//----------------------------------------------------------------------
  // состояние количества карточек в группе
  const [totalDisplayCards, setTotalDisplayCards] = useState(0);

  // функция изменения количества выдачи результата поиска
  function handleTotal() {setTotalDisplayCards(totalDisplayCards + addShowCards)}

  // Стейт количества карточек для добавления
  const [addShowCards, setAddShowCards] = useState(0);


  useEffect(() => {
    if(window.innerWidth > 1279) {
      setTotalDisplayCards(12);
      setAddShowCards(3);
    } else if (window.innerWidth > 767) {
      setTotalDisplayCards(8);
      setAddShowCards(2);
    } else if (window.innerWidth > 479) {
      setTotalDisplayCards(5);
      setAddShowCards(2);
    }
  }, []);  


  // при изменении штрины дисплея устройства
  window.onresize = () => {
    if (window.innerWidth > 1279) {
      setAddShowCards(3);
    } else {
      setAddShowCards(2);
    }
  };

//----------------------------------------------------------------------


  const history = useHistory();
  
  //состояние массива фильмов для рендера в сохранённых фильмах
  const [filmsToRenderInSavedFilms, setFilmsToRenderInSavedFilms] = useState([]);

  //состояние массива фильмов для рендера в фильмах
  const [filmsToRenderInFilms, setFilmsToRenderInFilms] = useState([]);

  //состояние переключателя короткометражек
  const [isShorts, setShorts] = useState(false);

  //состояние прелоадера
  const [loading, setLoading] = useState(false);

  //состояние входа
  const [isLoggedIn, setLoggedIn] = useState(false);

  //данные пользователя
  const [currentUser, setCurrentUser] = useState({});

  //массив сохраненных фильмов
  const [savedFilms, setSavedFilms] = useState([]);

  //поиск по фильмам BeatFilms
  //const [filteredBeatFilms, setFilteredBeatFilms] = useState([]);

  //управляемый инпут поиска  
  const [searchInput, setSearchInput] = useState([]); 

  //все карточки BeatFilms  
  const [cards, setCards] = useState([]);

  //состояние сообщения ошибки регистрации 
  const [registerError, setRegisterError] = useState(false);


  //запрос к апи на изменение данных пользователя
  function handleUpdateUser(name, email) {    
    mainApi.setUserData(name, email).then((result) => {
      setCurrentUser(result);
    })
    .catch((err) => console.log(err));
  }

  //функци возврата с несуществующей страницы
  function goBack() {
    history.goBack();
  }

  //-----------------------------mainApi----------------------------------
  // регистрация
  function handleRegister(name, email, password) {
    mainApi.register(name, email, password).then(
      (res) => {
        history.push("/signin");
      },
      (err) => {
        setRegisterError(true)
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
    localStorage.removeItem("checkbox-value");
    localStorage.removeItem("filteredBeatFilms");
    setLoggedIn(false);
    history.push("/");    
  }
    
  // проверка токена  
  useEffect(() => {
    tokenCheck();
  }, [isLoggedIn]);
  
  function tokenCheck() {
    const token = localStorage.getItem("token");
    if (token) {
      mainApi.getContent(token).then((res) => {      
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
 
  //получаем массив сохраненных фильмов
  useEffect(() => {
    if(isLoggedIn){
      mainApi
        .getMovies()    
        .then((res) => {
          setSavedFilms(res);
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [isLoggedIn]);  
  
  //выводим на рендер массив сохраненных фильмов
  useEffect(() => {
    setFilmsToRenderInSavedFilms(savedFilms);
  }, [savedFilms])

  //сохранить карточку в базе
  function addMovie(movieCard) {
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
  //----------------------------------------------------------------------
  
  
  // получаем результаты поискового запроса, сохраненные в локальном хранилище
  useEffect(() => {
    if(localStorage.getItem("filteredBeatFilms") && localStorage.getItem("checkbox-value")){
      setShorts(true);
      const newList = JSON.parse(localStorage.getItem("filteredBeatFilms")).filter(movie => movie.duration < 40);
      
      setFilmsToRenderInFilms(newList);
      //console.log(JSON.parse(localStorage.getItem("filteredBeatFilms")));
    }else{
      setShorts(false);
      setFilmsToRenderInFilms(JSON.parse(localStorage.getItem("filteredBeatFilms")));
    }
  }, []);
  
  
  //изменение состояния переключателя короткометражек
  function handleShorts() {    
    setShorts(!isShorts);
    if(!isShorts){
      const newList = (JSON.parse(localStorage.getItem("filteredBeatFilms"))).filter((movie) => {return movie.duration < 40;});
      setFilmsToRenderInFilms(newList);
      localStorage.setItem("checkbox-value", "checked");
    } else if (isShorts) {
      setFilmsToRenderInFilms(JSON.parse(localStorage.getItem("filteredBeatFilms")));
      localStorage.removeItem("checkbox-value");
    }
  }
  

  //изменение состояния переключателя короткометражек в "Сохранённых фильмах"
  function handleShortsSaved() {    
    setShorts(!isShorts);
    
    if(!isShorts){
      const newList = filmsToRenderInSavedFilms.filter((movie) => {return movie.duration < 40;});
      setFilmsToRenderInSavedFilms(newList);
    } else if (isShorts) {
      setFilmsToRenderInSavedFilms(savedFilms);
    }
  }
    
  //функция поиска по фильмам BeatFilms
  function handleMoviesFilter(arrayBeatFilms) {
    
    //приводим к нижнему регистру строку поискового запроса
    const inputLowerCase = searchInput.toLowerCase().trim();    
    
    const searchResult = arrayBeatFilms.filter((movie) => {
      const movieNameRU = movie.nameRU.toLowerCase().trim();
      return !isShorts
      ?
      movieNameRU.indexOf(inputLowerCase) > -1
      :
      movieNameRU.indexOf(inputLowerCase) > -1 && movie.duration < 40;
    });
    console.log(searchResult);

    //выводим на рендер результат поиска в сохранённых фильмах
    setFilmsToRenderInFilms(searchResult);
        
    localStorage.setItem("filteredBeatFilms", JSON.stringify(searchResult));    
  }  

  //функция поиска по сохранённым фильмам
  function handleSavedMoviesFilter(arraySavedFIlms) {
    
    //приводим к нижнему регистру строку поискового запроса
    const inputLowerCase = searchInput.toLowerCase().trim();
    
    const searchResult = arraySavedFIlms.filter((movie) => {
      const movieNameRU = movie.nameRU.toLowerCase().trim();
      return !isShorts
      ?
      movieNameRU.indexOf(inputLowerCase) > -1
      :
      movieNameRU.indexOf(inputLowerCase) > -1 && movie.duration < 40;
    });
    
    //выводим на рендер результат поиска в сохранённых фильмах
    setFilmsToRenderInSavedFilms(searchResult);

  }

  // useEffect(() => {console.log(isLoggedIn)}, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">          
          <Switch>


            <ProtectedRoute
              isLoggedIn={true}
              path="/movies"

              component={Movies}
              
              loading={loading}

              total={totalDisplayCards}
              handleTotal={handleTotal}
              
              shortsButtonActive={isShorts}
              onClickShortsButton={handleShorts}
              
              //добавление/удаление фильма
              onAddMovie={addMovie}
              onDelMovie={deleteMovie}              

              //поиск фильма
              handleFilter={handleMoviesFilter}

              
              setSearchInput={setSearchInput}
              searchInput={searchInput}

              //
              arrayForSearching={cards}
              //filmsToRender={filteredBeatFilms}
              
              filmsToRender={filmsToRenderInFilms}
              savedFilms = {savedFilms}
            /> 

            <Route exact path="/">
              <Header isLoggedIn={isLoggedIn}/>
              <Main />
              <Footer />            
            </Route>

            <Route path="/saved-movies">
              <Header
                isLoggedIn={isLoggedIn}
              />
              <SavedMovies
                //поиск фильма
                handleFilter={handleSavedMoviesFilter}

                shortsButtonActive={isShorts}
                onClickShortsButton={handleShortsSaved}

                setSearchInput={setSearchInput}
                searchInput={searchInput}

                //filmsToRender = {savedFilms}
                filmsToRender = {filmsToRenderInSavedFilms}
                savedFilms = {savedFilms}
                onDelFromSaved={deleteMovieFromSaved}

                arrayForSearching={savedFilms}
              />
              <Footer />
            </Route>

            <Route path="/signup">
              <Register
                onRegister={handleRegister}
                registerError={registerError}
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

import React, { useState, useEffect } from "react";
import { Route, Redirect, Switch, useHistory } from "react-router-dom";
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

import {
  DESKTOP,
  TABLET,
  MOBILE,
  DESKTOP_TOTAL_CARDS,
  TABLET_TOTAL_CARDS,
  MOBILE_TOTAL_CARDS,
  SHORTS_DURATION
} from "../../utils/constants"; 

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

  // состояние количества карточек для добавления
  const [addShowCards, setAddShowCards] = useState(0);

  //состояние массива фильмов для рендера в фильмах
  const [filmsToRenderInFilms, setFilmsToRenderInFilms] = useState([]);


  useEffect(() => {
    if(window.innerWidth > DESKTOP) {
      setTotalDisplayCards(DESKTOP_TOTAL_CARDS);
      setAddShowCards(3);
    } else if (window.innerWidth > TABLET) {
      setTotalDisplayCards(TABLET_TOTAL_CARDS);
      setAddShowCards(2);
    } else if (window.innerWidth > MOBILE) {
      setTotalDisplayCards(MOBILE_TOTAL_CARDS);
      setAddShowCards(2);
    }
  }, [filmsToRenderInFilms]);  


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

  
  
  //сообщение ничего не найдено
  const [errorMessage, setErrorMessage] = useState("");

  //сообщение о результате редактирования профиля
  const [succesProfileEditMessage, setSuccesProfileEditMessage] = useState("");
  
  //состояние массива фильмов для рендера в сохранённых фильмах
  const [filmsToRenderInSavedFilms, setFilmsToRenderInSavedFilms] = useState([]);




  //состояние переключателя короткометражек
  const [isShorts, setShorts] = useState(false);

  //состояние переключателя короткометражек в сохранённых
  const [isShortsSaved, setShortsSaved] = useState(false);

  //состояние прелоадера
  const [loading, setLoading] = useState(false);

  //состояние входа
  const [isLoggedIn, setLoggedIn] = useState(false);

  //данные пользователя
  const [currentUser, setCurrentUser] = useState({});

  //массив сохраненных фильмов
  const [savedFilms, setSavedFilms] = useState([]);

  //управляемый инпут поиска  
  const [searchInput, setSearchInput] = useState(""); 

  //все карточки BeatFilms  
  //const [cards, setCards] = useState([]);

  //состояние сообщения ошибки регистрации 
  const [registerError, setRegisterError] = useState(false);


  //запрос к апи на изменение данных пользователя
  function handleUpdateUser(name, email) {    
    mainApi.setUserData(name, email)
    .then((result) => {
      setCurrentUser(result);
      setSuccesProfileEditMessage("Профиль изменён!");
    })
    .catch((err) => {
      setSuccesProfileEditMessage("Произошла ошибка!");
      console.log(err)
    });
  }

  //функци возврата с несуществующей страницы
  function goBack() {
    history.goBack();
  }

  //-----------------------------mainApi----------------------------------
  // регистрация
  function handleRegister(name, email, password) {
    mainApi.register(name, email, password).then(
      () => {
        setLoggedIn(true);
        history.push("/movies");
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
    localStorage.removeItem("searchInput");
    localStorage.removeItem("allFilms");
    setLoggedIn(false);
    history.push("/");    
  }

  // получаем результаты поискового запроса, сохраненные в локальном хранилище
  useEffect(() => {
    if(localStorage.getItem("filteredBeatFilms") && localStorage.getItem("checkbox-value")){
      setShorts(true);
      const newList = JSON.parse(localStorage.getItem("filteredBeatFilms")).filter(movie => movie.duration < SHORTS_DURATION);      
      setFilmsToRenderInFilms(newList);
      
    }else{
      setShorts(false);
      setFilmsToRenderInFilms(JSON.parse(localStorage.getItem("filteredBeatFilms")));
    }
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

  //----------------------------------------------------------------------------------------------

  function drop(movieCard, isLiked, setIsLiked) {
    
    if(isLiked){
      
      deleteMovie(movieCard, isLiked, setIsLiked);

    }else if(!isLiked){
      
      addMovie(movieCard, isLiked, setIsLiked);
    }
    
  }

  //сохранить карточку в базе
  function addMovie(movieCard, isLiked, setIsLiked) {
    mainApi
      .saveMovie(movieCard)
      .then((newMovieCard) => {
        setSavedFilms([...savedFilms, newMovieCard]);        
      })
      .then(console.log(savedFilms))
      .catch((err) => {
        if(err === "Ошибка is number: 401"){
          handleSignOut();
        }; 
        console.log(err);
      });    
  }
  
  //найти карточку по id
  function findCardId(c){
    const findedCard = savedFilms.find((item) => item.movieId === c.id);
    return findedCard;
  }
  //удалить карточку из базы
  function deleteMovie(movieCard, isLiked, setIsLiked) {  
    mainApi
      .deleteMovie(findCardId(movieCard)._id)
      .then(res => setSavedFilms(savedFilms.filter((item) => item._id !== res._id)))
      .then(setIsLiked(!isLiked))
      .catch((err) => console.log(err));
  }

  function deleteMovieFromSaved(movieCard) {  
    mainApi
      .deleteMovie(movieCard._id)
      .then(res => setSavedFilms(savedFilms.filter((item) => item._id !== res._id)))
      .catch((err) => console.log(err));
  }

  //---------------------------SAVED-------------------------------------------
  

  //изменение состояния переключателя короткометражек в "Сохранённых фильмах"
  function handleShortsSaved() {    
    setShortsSaved(!isShortsSaved);
  }
  
  //функция обработки инпута поискового запроса в сохранённых фильмах
  function handleSavedMoviesFilter() {
    filterSearchSaved(findMovieInFilms(savedFilms));
  }

  function filterSearchSaved(films) {
    setErrorMessage("");
    if(isShortsSaved){
      const newList = films.filter((movie) => {return movie.duration < SHORTS_DURATION;});
      if (newList.length === 0) {setErrorMessage("Ничего не найдено")};  
      setFilmsToRenderInSavedFilms(newList);
    } else if (!isShortsSaved) {
      if (films.length !== 0) {setErrorMessage("")} else {setErrorMessage ("Ничего не найдено")}
      setFilmsToRenderInSavedFilms(films);      
    }    
  }

  useEffect(()=>{
    if(isShortsSaved){
      filterSearchSaved(filmsToRenderInSavedFilms)
    }else{
      filterSearchSaved(savedFilms)
    }    
  }, [isShortsSaved])

  //-----------------------------END SAVED-----------------------------------------


  //функция обработки инпута поискового запроса
  function handleMoviesFilter() {

  //получаем карточки с сервера при первом обращении и сохраняем их в локальном хранилище
  if(localStorage.getItem("allFilms") === null) {
    setLoading(true);
    moviesApi.getMovies()
    .then((res) => {
      localStorage.setItem("allFilms", JSON.stringify(res));        
      filterSearch(findMovieInFilms(res));
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      setLoading(false);
    }
    )
    } else {
      filterSearch(findMovieInFilms(JSON.parse(localStorage.getItem("allFilms"))));
    }    
  }
  
  //функция поиска по фильмам
  function findMovieInFilms(allMoviesArray) {
    //приводим к нижнему регистру строку поискового запроса
    const inputLowerCase = searchInput.toLowerCase().trim();
    const searchResult = allMoviesArray.filter((movie) => {
      const movieNameRU = movie.nameRU.toLowerCase().trim();
      return movieNameRU.indexOf(inputLowerCase) > -1
    });    
    localStorage.setItem("searchInput", JSON.stringify(searchInput));      
    localStorage.setItem("filteredBeatFilms", JSON.stringify(searchResult));
    //filterSearch(searchResult);
    return searchResult;
  }

  //изменение состояния переключателя короткометражек
  function handleShorts() {    
    setShorts(!isShorts);
  }

  function filterSearch(films) {
    if(isShorts){
      const newList = films.filter((movie) => {return movie.duration < SHORTS_DURATION;});
      if (newList.length === 0 && newList !== false) {
        
        setErrorMessage("Ничего не найдено")
      };  
      setFilmsToRenderInFilms(newList);
      localStorage.setItem("checkbox-value", "checked");
    } else if (!isShorts) {
      if (films.length !== 0) {setErrorMessage("")} else {setErrorMessage ("Ничего не найдено")}
      setFilmsToRenderInFilms(films);
      localStorage.removeItem("checkbox-value");
    }
  }

  useEffect(()=>{
    filterSearch(JSON.parse(localStorage.getItem("filteredBeatFilms")) || false);
  }, [isShorts])


  //-----------------------------------------------------------------------------------------------
  
  // проверка токена  
  useEffect(() => {
    
      const token = localStorage.getItem("token");
      
      if (token) {
        mainApi.getContent(token).then((res) => {      
          if (res) {
            setLoggedIn(true);
            setCurrentUser(res);            
          }
        })
        .catch((err) => {
          setLoggedIn(false);
          history.push("/");
          console.log(err);        
        });
      } else if (!token) {
        setLoggedIn(false);
        //сделать удаление стейтов
        history.push("/");
      }  

  }, []);
  

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">          
          <Switch>
            
            <Route exact path="/">
              <Header isLoggedIn={isLoggedIn}/>
              <Main />
              <Footer />            
            </Route>

            <Route exact path="/signup">
              {isLoggedIn
              ?
              (<Redirect to='/' />)
              :
              (<Register
                onRegister={handleRegister}
                registerError={registerError}
              />)}

            </Route>

            <Route exact path="/signin">
              {isLoggedIn
              ?
              (<Redirect to='/' />)
              :
              (<Login
                onLogin={handleLogin}
              />)}
            </Route>

            <ProtectedRoute
              path="/movies"
              isLoggedIn={isLoggedIn}
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
              //arrayForSearching={cards}
              //filmsToRender={filteredBeatFilms}
              
              filmsToRender={filmsToRenderInFilms}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
              
              savedFilms = {savedFilms}

              drop={drop}


            /> 

            <ProtectedRoute
              path="/saved-movies"
              component={SavedMovies}

              isLoggedIn={isLoggedIn}
              //поиск фильма
              handleFilter={handleSavedMoviesFilter}

              shortsButtonActive={isShortsSaved}
              onClickShortsButton={handleShortsSaved}

              setSearchInput={setSearchInput}
              searchInput={searchInput}

              //filmsToRender = {savedFilms}
              filmsToRender = {filmsToRenderInSavedFilms}
              savedFilms = {savedFilms}
              onDelFromSaved={deleteMovieFromSaved}

              arrayForSearching={savedFilms}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}


            />

            <ProtectedRoute
              path="/profile"
              component={Profile}
              isLoggedIn={isLoggedIn}              
              currentUser={currentUser}
              onSignOut={handleSignOut}
              onUpdateUser={handleUpdateUser}
              succesProfileEditMessage={succesProfileEditMessage}
              setSuccesProfileEditMessage={setSuccesProfileEditMessage}
            />

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

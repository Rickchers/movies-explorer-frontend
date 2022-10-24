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
import * as mainApi from "../../utils/MainApi";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";


import { useState, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";


function App() {
  // const [isLoaded, setLoaded] = useState(true);
  const [isMoviecardClosed, setMoviecardClosed] = useState(false);
  const [isShorts, setShorts] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

 

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
  //====================movieCard========================
  function handleMovieCardLike(movieCard) {
    console.log(movieCard);
    mainApi
      .changeMoviecardLikeStatus(movieCard)
      .catch((err) => console.log(err));
  }

  //=====================================================

  //====================mainApi==========================
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

  function handleLogin(email, password) {
    mainApi
      .authorize(email, password)
      .then(() => {
        setLoggedIn(true);
        history.push("/movies");
      })
      .catch((err) => console.log(err));
  }

  function handleSignOut() {
    localStorage.removeItem("token");
    setLoggedIn(false);
    history.push("/");
  }  

  useEffect(() => {
    tokenCheck();
  }, []);

  function tokenCheck() {
    const token = localStorage.getItem("token");
    
    if (token) {
      mainApi.getContent(token).then((res) => {    
        console.log(res);    
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
  //====================end mainApi======================
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
              buttonTypeClose={false}              
              shortsButtonActive={isShorts}
              onClickShortsButton={handleShorts}
              onMovieCardLike={handleMovieCardLike}
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

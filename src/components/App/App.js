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
import { moviesApi } from "../../utils/MoviesApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import * as auth from "../../utils/auth";


import { Route, Switch, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";


function App() {
  const [isLoaded, setLoaded] = useState(true);
  const [isMoviecardClosed, setMoviecardClosed] = useState(false);
  const [isShortsButtonActive, setShortsButtonActive] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const [movies, setMovies] = useState([]);

  const history = useHistory();
 
  function handleCloseMoviecard() {    
    setMoviecardClosed(true);
  }

  function handleShortsButtonActive() {
    setShortsButtonActive(!isShortsButtonActive);
  }

  useEffect(() => {
    if (true) {
      moviesApi.getMovies().then((result) => {
        setMovies(result);        
      })
      .catch((err) => console.log(err));
    }
  }, []);
  //console.log(movies);

  //====================auth==========================
  function handleLogin(email, password) {
    auth
      .authorize(email, password)
      .then(() => {
        setLoggedIn(true);
        history.push("/movies");
      },
      (err) => {
        
      })
      .catch((err) => console.log(err));
  }
  //====================end auth======================
  return (
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
            shortsButtonActive={isShortsButtonActive}
            onClickShortsButton={handleShortsButtonActive}
          /> 

          {/* <Route path="/movies">
            <Header
              isLoggedIn={true}
            />
            <Movies
              buttonTypeClose={false}

              shortsButtonActive={isShortsButtonActive}
              onClickShortsButton={handleShortsButtonActive}
            />
            <Footer />
          </Route> */}

          <Route path="/saved-movies">
            <Header
              isLoggedIn={true}
            />
            <SavedMovies
              buttonTypeClose={true}
              
              onClickCloseIcon={handleCloseMoviecard}
              moviecardClosed={isMoviecardClosed}

              shortsButtonActive={isShortsButtonActive}
              onClickShortsButton={handleShortsButtonActive}
            />
            <Footer />
          </Route>

          <Route path="/signup">
            <Register />
          </Route>

          <Route path="/signin">
            <Login
              onLogin={handleLogin}
            />
          </Route>

          <Route path="/profile">
            <Header
              isLoggedIn={true}
            />
            <Profile />
          </Route>

          <Route path="/404">
            <Notfound />            
          </Route>

        </Switch>

    </div>
  );
}

export default App;

import './App.css';
import Main from "../Main/Main"
import Movies from "../Movies/Movies";
import Header from "../Header/Header"
import Footer from "../Footer/Footer";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import Notfound from '../Notfound/Notfound';
import Preloader from "../Preloader/Preloader";


import { Route, Switch } from "react-router-dom";
import { useState } from "react";


function App() {
  const [isLoaded, setLoaded] = useState(true);

  return (
    <div className="App">
      {!isLoaded ? (<Preloader />) : 
      (
        <Switch>

          <Route exact path="/">
            <Header isLoggedIn={false}/>
            <Main />
            <Footer />
            
          </Route> 

          <Route path="/movies">
            <Header
              isLoggedIn={true}
            />
            <Movies />
            <Footer />
          </Route>

          <Route path="/saved-movies">
            <Header
              isLoggedIn={true}
            />
            <SavedMovies />
            <Footer />
          </Route>

          <Route path="/signup">
            <Register />
          </Route>

          <Route path="/signin">
            <Login />
          </Route>

          <Route path="/profile">
            <Header
              isLoggedIn={true}
            />
            <Profile />
          </Route>
            <Notfound />
          <Route path="/404">
            
          </Route>

        </Switch>
      )}
    </div>
  );
}

export default App;

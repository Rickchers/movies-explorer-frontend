import './App.css';
import Main from "../Main/Main"
import Movies from "../Movies/Movies";
import Header from "../Header/Header"
import Footer from "../Footer/Footer";
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";

import { Route, Switch } from "react-router-dom";


function App() {

  return (
    <div className="App">
    
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
          {/* <Movies /> */}
          {/* <Footer /> */}
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
          <Header />
          <Profile />
        </Route>

      </Switch>
    
    </div>
  );
}

export default App;

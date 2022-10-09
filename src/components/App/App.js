import './App.css';
import Main from "../Main/Main"
import Movies from "../Movies/Movies";
import Header from "../Header/Header"
import Footer from "../Footer/Footer";
import SavedMovies from "../SavedMovies/SavedMovies"

import { Route, Switch, useHistory, withRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Header />
    <Switch>  
      <Route exact path="/">
        <Main />
      </Route> 

      <Route path="/movies">
        <Movies />
      </Route>

      <Route path="/saved-movies">
        <SavedMovies />
      </Route>

    </Switch>
    <Footer />
    </div>
  );
}

export default App;

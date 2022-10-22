class MoviesApi {
  constructor(options) {
    this._url = options.url;
    this._headers = options.headers;
  }

  _checkResponse(res) {   
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error is number: ${res.status}`);     
  }

  getMovies() {
    
    return fetch(`${this._url}`, {
      method: 'GET',
      headers: this._headers
    })
    .then(this._checkResponse);
  }

}

const moviesApi = new MoviesApi({
  url: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    "Accept": "application/json",
    'Content-Type': 'application/json',
  }
}
);

export {moviesApi};
    //const sMovies = getSavedMovies();
    //const isLiked = sMovies.some((i) => i.movieId === movieCard.id);
    //console.log(sMovies);
    
    //console.log(movieCard.id);

    // if (!isLiked) {
    //   mainApi
    //     .saveMovie(movieCard)
    //     .then((res) => console.log(res))
    //     .catch((err) => console.log(err));
    // } else if (isLiked) {
    //   const finded = savedMovies.find((i) => i.movieId === movieCard.id)
    //   console.log(finded._id);
    //   // mainApi
    //   // .deleteMovie(movieCard.id)
    //   // .catch((err) => console.log(err));
    // }

    //---------------------------------------------------------------
    //const sMovies = getSavedMovies();
    //const isLiked = sMovies.some((i) => i.movieId === movieCard.id);
    //console.log(sMovies);
    
    //console.log(movieCard.id);

    // if (!isLiked) {
    //   mainApi
    //     .saveMovie(movieCard)
    //     .then((res) => console.log(res))
    //     .catch((err) => console.log(err));
    // } else if (isLiked) {
    //   const finded = savedMovies.find((i) => i.movieId === movieCard.id)
    //   console.log(finded._id);
    //   // mainApi
    //   // .deleteMovie(movieCard.id)
    //   // .catch((err) => console.log(err));
    // }
    //----------------------------------------------------------

      // useEffect(() => {
  //   const token = localStorage.getItem("token");

    
      // mainApi.getMovies(token).then(res => {
      //   if (res) {
      //     const myMovies = res.filter(item => item.owner === currentUser._id);
      //     setSavedMovies(myMovies);
      //     console.log(savedMovies);          
      //   }
      // })
      // .catch((err) => {
      //   console.log(err);        
      // });
  // }, [currentUser]);

  // function getSavedMovies() {
  //   const token = localStorage.getItem("token");

  //   mainApi.getMovies(token).then(res => {
  //     if (res) {
  //       const myMovies = res.filter(item => item.owner === currentUser._id);
  //       console.log(myMovies);          
  //     }
  //   })
  //   .catch((err) => {
  //     console.log(err);        
  //   });
  // }
  //-------------------------------------------
    // mainApi
    //   .getMovies()
    //   .then(res => console.log(res))
    //   .then(res => {
    //     setSavedMoviesArr(res);
    //   })
//---------------------------------------------
    /*
    const moviesSearchResult = [];
    
    movies.forEach((item, i) => {
    
      const movieNameRU = item.nameRU.toLowerCase().trim();
      const inputLowerCase = input.toLowerCase().trim();
      
      if (movieNameRU.indexOf(inputLowerCase) > -1) {
        //console.log(movies[i]);
        moviesSearchResult.push(movies[i]);
      } 
    });
    moviesSearchResult.map((item) => setfindedMovies([...findedMovies, item]));
    //return setfindedMovies(moviesSearchResult);
    */
//--------------------------------------------------
    // const inputLowerCase = SearchInput.toLowerCase().trim();
    // moviesApi.getMovies()
    // .then(res => {
    //   //console.log(res);
    //   const searchResult = res.filter((movie) => {
    //     const movieNameRU = movie.nameRU.toLowerCase().trim();
    //     return movieNameRU.indexOf(inputLowerCase) > -1;
    //   });
    //   return searchResult;
    // })
    // .then(res => {
    //   console.log(res);
    //   setfindedMovies(res);
    // })
    // .catch((err) => console.log(err));
//---------------------------------------------------
  //старая функция поиска по фильмам BeatFilms
  // function handleMoviesFilter(arrayBeatFilms) {
  //   setTotal(3);
  //   const inputLowerCase = searchInput.toLowerCase().trim();

  //   if (!isShorts)
  //   {
  //     const searchResult = arrayBeatFilms.filter((movie) => {
  //       const movieNameRU = movie.nameRU.toLowerCase().trim();
  //       return movieNameRU.indexOf(inputLowerCase) > -1;
  //     });

  //     localStorage.setItem("filteredBeatFilms", JSON.stringify(searchResult));
  //     setFilteredBeatFilms(JSON.parse(localStorage.getItem("filteredBeatFilms")));

  //   } 
    
  //   else if (isShorts)
  //   {
  //     const searchResult = arrayBeatFilms.filter((movie) => {      
  //     const movieNameRU = movie.nameRU.toLowerCase().trim();
  //     return movieNameRU.indexOf(inputLowerCase) > -1 && movie.duration < 40;});

  //     localStorage.setItem("filteredBeatFilms", JSON.stringify(searchResult));
  //     setFilteredBeatFilms(JSON.parse(localStorage.getItem("filteredBeatFilms")));
  //   }
    
  // }
//----------------------------------------------------
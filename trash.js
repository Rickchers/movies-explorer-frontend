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
export const BASE_URL = "http://localhost:3001";
//export const BASE_URL = "https://api.rickchers.diplom.nomorepartiesxyz.ru";
//аутентификация пользователя (регистрация)
export const register = (name, email, password) => {
  
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
};

//авторизация пользователя
export const authorize = (email, password) => {
  
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((data) => {
      if (data.token) {
        localStorage.setItem("token", data.token);
        return data;
      } else {
        return;
      }
    });
};

//проверка токена
export const getContent = (token) => {
  
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  })
  .then((res) => res.json())
  .then(data => data);
};

// получение сохраненных фильмов
export const getMovies = () => {
  const token = localStorage.getItem("token");

  return fetch(`${BASE_URL}/movies`, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
    },
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка is number: ${res.status}`);  
  });
};

// редактирование профиля
export const setUserData = (name, email) => {
  
  const token = localStorage.getItem("token");
  
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,      
    },

    body: JSON.stringify({
      name: name,
      email: email
    })

  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка is number: ${res.status}`);  
  });
}

// сохранение фильма
export const saveMovie = ({
  country,
  created_at,
  description,
  director,
  duration,
  id,
  image,
  nameEN,
  nameRU,
  trailerLink,
  updated_at,
  year
}) => {
  
  
  const token = localStorage.getItem("token");
  return fetch(`${BASE_URL}/movies/`, {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,      
    },

    body: JSON.stringify({
      country: country,
      "director": director,
      "duration": duration,
      "year": year,
      "description": description,

      "image": {"url": image.url},
     

      "trailerLink": trailerLink,
      "thumbnail": "https://api.nomoreparties.co/",
      "movieId": id,
      "nameRU": nameRU,
      "nameEN": nameEN,
    })

  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка is number: ${res.status}`);  
  });
  
}

//удаление фильма
export const deleteMovie = (id) => {
  
  const token = localStorage.getItem("token");

  return fetch(`${BASE_URL}/movies/${id}`, {
    method: 'DELETE',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,      
    },
  })
  .then((res) => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка is number: ${res.status}`);  
  });
  
}
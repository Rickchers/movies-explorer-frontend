export const BASE_URL = "http://localhost:3001";

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

// редактирование профиля
export const setUserData = (name, email) => {
  console.log(name, email);
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

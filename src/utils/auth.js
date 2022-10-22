export const BASE_URL = "http://localhost:3001";

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
        //console.log(data.token);
        return data;
      } else {
        return;
      }
    });
};

import React, { useEffect } from 'react';

import Header from "../Header/Header";

import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

import "./Profile.css";
import useInput from "../../hooks/useInput.js"

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);
  
  const userName = useInput("", {isEmpty: true, minLength: 2, isName: true});
  const email = useInput("", {isEmpty: true, minLength: 3, isEmail: true});

  useEffect(() => {
    props.setSuccesProfileEditMessage("");
  }, []);

  //устанавливаем значения имени пользователя и емэйла из currentUser в поля формы редактирования профиля
  useEffect(() => {
    if (currentUser) {
      userName.resetForm(currentUser.name);
      email.resetForm(currentUser.email);
    }
  }, [currentUser]);  

  function handleSubmit(e){
    e.preventDefault();
    props.onUpdateUser(userName.value, email.value);
  }

  //сообщения об ошибках
  const myUserNameDiv = userName.result();
  const myEmailDiv = email.result();

  //если значение одного из полей отличаются от текущих и форма валидна кнопка "редактировать" активируется
  const disabled = (!email.inputValid || !userName.inputValid) ? true : ((userName.value === currentUser.name && email.value === currentUser.email));

  return (
    <>    
      <Header
        isLoggedIn={props.isLoggedIn}
      />
      <section className="profile__wrapper">
        
        {currentUser.name && <h3 className="profile__title">{`Привет, ${currentUser.name}`}</h3>}
        
        <form
          noValidate
          className="profile__form"
          name="form"
        >

          <div className="profile__form-row">
            <span className="profile__input-title">Имя</span>
            <input
              onChange={e => userName.onChange(e)}
              onBlur={e => userName.onBlur(e)}
              onFocus={e => props.setSuccesProfileEditMessage("")}
              value={userName.value}
              placeholder=""
              name="name" 
              type="text"
              className="profile__input"
              minLength="2"
              maxLength="200"
              required
            />
          </div>
          {myUserNameDiv}
          
          <div className="profile__form-row">
            <span className="profile__input-title">E-mail</span>
            <input
              onChange={e => email.onChange(e)}            
              onBlur={e => email.onBlur(e)}
              onFocus={e => props.setSuccesProfileEditMessage("")}
              value={email.value}
              placeholder= ""
              name="email"
              type="text"
              className="profile__input"
              required
            />
          </div>        
          {myEmailDiv}
        </form>
        <div className="profile__changed-wrapper">
          <p className="profile__changed">{props.succesProfileEditMessage}</p>
        </div>
        
        <button
          disabled={disabled}
          type="button"
          className={disabled ? "profile__edit-button" : "profile__edit-button profile__edit-button_active"}
          onClick={handleSubmit}
        >
          Редактировать
        </button>
        <button
          type="button"
          className="profile__edit-button profile__edit-button_colored"
          onClick={props.onSignOut}
        >
          Выйти из аккаунта
        </button>
        

      </section>
    </>    
  )
}

export default Profile;
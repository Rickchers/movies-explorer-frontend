import "./Profile.css";
import React, { useState, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

import useInput from "../../hooks/useInput.js"

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);
  
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  
  
  
  const userName = useInput("", {isEmpty: true, minLength: 2, isName: true});
  const email = useInput("", {isEmpty: true, minLength: 3, isEmail: true});

  useEffect(() => {
    if (currentUser) {
      userName.resetForm(currentUser.name);
      email.resetForm(currentUser.email);
    }
  }, [currentUser]);
  
  // useEffect(() => {
    
  //     // setName(currentUser.name);
  //     // setEmail(currentUser.email);
  // }, [currentUser]);

  function handleSubmit(e){
    e.preventDefault();
    props.onUpdateUser(userName.value, email.value);
    //setTitleName(userName);
  }

  const myUserNameDiv = userName.result();
  const myEmailDiv = email.result();

  return (
    
    <section className="profile__wrapper">

      {currentUser.name && <h3 className="profile__title">{`Привет, ${currentUser.name}`}</h3>}
      
      <form
        noValidate
        className="profile__form"
      >

        <div className="profile__form-row">
          <span className="profile__input-title">Имя</span>
          <input
            onChange={e => userName.onChange(e)}
            
            onBlur={e => userName.onBlur(e)}
            value={userName.value}
            placeholder=""
            name="name" 
            type="text"
            className="profile__input"
            // value={name || ''}
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
            value={email.value}
            placeholder= ""
            name="email"
            type="text"
            className="profile__input"
            // value={email || ''}
            required
          />
        </div>        
        {myEmailDiv}
      </form>

      <button
        disabled={!email.inputValid || !userName.inputValid}
        type="button"
        className={(!email.inputValid || !userName.inputValid) ? "profile__edit-button" : "profile__edit-button profile__edit-button_active"}
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
  )
}

export default Profile;
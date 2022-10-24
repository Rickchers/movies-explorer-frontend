import "./Profile.css";
import React, { useState, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Profile(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
      setName(currentUser.name);
      setEmail(currentUser.email);
  }, [currentUser]);

  function handleSubmit(e){
    e.preventDefault();
    props.onUpdateUser(name, email);
  }

  function handleChangeName(e) {        
    setName(e.target.value);
  }

  function handleChangeEmail(e) {      
    setEmail(e.target.value);
  }

  return (
    <section className="profile__wrapper">

      <h3 className="profile__title">{`Привет, ${name}`}</h3>
      
      <form className="profile__form">

        <div className="profile__form-row">
          <span className="profile__input-title">Имя</span>
          <input
            onChange={handleChangeName} 
            className="profile__input"
            required
            type="text"
            value={name || ''}
            minLength="2"
            maxLength="200"
          />
        </div>
        
        <div className="profile__form-row">
          <span className="profile__input-title">E-mail</span>
          <input
            onChange={handleChangeEmail} 
            className="profile__input"
            required
            type="text"
            value={email || ''}
            name="email"
          />
        </div>        
      </form>

      <button
        type="button"
        className="profile__edit-button"
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
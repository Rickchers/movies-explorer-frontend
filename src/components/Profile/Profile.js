import "./Profile.css";

function Profile() {
  return (
    <section className="profile__wrapper">

      <h3 className="profile__title">Привет, Виталий!</h3>
      
      <form className="profile__form">

        <div className="profile__form-row">
          <span className="profile__input-title">Имя</span>
          <input
            className="profile__input"
            required
            type="text"
            defaultValue="Виталий"
            minLength="2"
            maxLength="200"
          />
        </div>
        
        <div className="profile__form-row">
          <span className="profile__input-title">E-mail</span>
          <input
            className="profile__input"
            required
            type="text"
            defaultValue="pochta@yandex.ru"
            name="email"
          />
        </div>        
      </form>

      <p className="profile__edit">Редактировать</p>
      <p className="profile__edit profile__edit_colored">Выйти из аккаунта</p>

    </section>
  )
}

export default Profile;
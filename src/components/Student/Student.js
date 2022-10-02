import "./Student.css";
import foto from "../../images/student.jpg"

function Student() {
  return (
    <section className="student">
      <div className="student__wrapper">
        <h2 className="student__title">Студент</h2>
        <div className="student__about-wrapper">
          <div className="student__about-content">
            <h3 className="student__about-title">Кирилл</h3>
            <p className="student__about-subtitle">Front-end разработчик</p>
            <p className="student__about-text">
              Я родился во Владивостоке, живу в Москве. Окончил факультет филологии БГУ. Холост.
              На выходных люблю кататься на своем шоссейном велосипеде Cannondale Super Six Evo в
              лосиноостровском парке. С 2018 года работаю специалистом по допечатной подготовке для
              флексографии в репро-центре. Мне нравится программирование потому, что с помощью
              программ можно сделать так, чтобы работал компьютер, а не человек. 
            </p>
            <a href="https://github.com/Rickchers/" className="student__link">Github</a> 
          </div>
          <img className="studetn__foto" src={foto} alt="фотография студента" />
        </div>
      </div>
    </section>
  )
}

export default Student;
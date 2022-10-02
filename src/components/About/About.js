import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about__wrapper">
        <h2 className="about__title">О проекте</h2>
        <div className="about__content">
          <div className="about__column">
            <h3 className="about__column-title">Дипломный проект включал 5 этапов</h3>
            <p className="about__column-text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div>
            <h3 className="about__column-title">На выполнение диплома ушло 5 недель</h3>
            <p className="about__column-text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className="grid">
            <div className="grid__main">
              <h3 className="grid__main_title">1 неделя</h3>
              <p className="grid__content">Back-end</p>
            </div>
            <div className="grid__side">
              <h3 className="grid__side_title">4 недели</h3>
              <p className="grid__content">Front-end</p>
            </div>
          </div>
      </div>
    </section>
  )
}

export default About;
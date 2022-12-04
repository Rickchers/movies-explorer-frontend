import "./Tech.css"

function Tech() {
  return (
    <section className="tech">
      
        <h2 className="tech__title">Технологии</h2>
        <h3 className="list__heading">7 технологий</h3>
        <p className="list__subheading">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
        <ul className="list">
          <li className="list__row">
            <p className="list__text">HTML</p>
          </li>
          <li className="list__row">
            <p className="list__text">CSS</p>
          </li>
          <li className="list__row">
            <p className="list__text">JS</p>
          </li>
          <li className="list__row">
            <p className="list__text">React</p>
          </li>
          <li className="list__row">
            <p className="list__text">Git</p>
          </li>
          <li className="list__row">
            <p className="list__text">Express.js</p>
          </li>
          <li className="list__row">
            <p className="list__text">MongoDB</p>
          </li>
        </ul>
      
    </section>
  )
}

export default Tech;
import "./Portfolio.css";
import arrow from "../../images/arrow.svg"

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__wrapper">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="portfolio__list">
          <li className="portfolio__list-row">
            <a
              href="https://github.com/Rickchers/how-to-learn"
              className="portfolio__link"
              target="_blank"
              rel="noreferrer"
            >
              Статичный сайт
              <img className="portfolio__icon" src={arrow} alt="стрелка" />
            </a>
          </li>
          <li className="portfolio__list-row">
            <a
              href="https://github.com/Rickchers/russian-travel"
              className="portfolio__link"
              target="_blank"
              rel="noreferrer"
            >
              Адаптивный сайт
              <img className="portfolio__icon" src={arrow} alt="стрелка" />
            </a>
          </li>
          <li className="portfolio__list-row">
            <a
              href="https://github.com/Rickchers/react-mesto-api-full"
              className="portfolio__link"
              target="_blank"
              rel="noreferrer"
            >
              Одностраничное приложение
              <img className="portfolio__icon" src={arrow} alt="стрелка" />
            </a>
          </li>
        </ul>

      </div>

    </section>
  )
}

export default Portfolio;
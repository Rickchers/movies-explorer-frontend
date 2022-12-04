import "./Notfound.css";

function Notfound(props) {
  return (
    <section className="notfound">
      <h1 className="notfound__title">404</h1>
      <h2 className="notfound__subtitle">Страница не найдена</h2>
      <button
        className="notfound__link-back"
        onClick={props.goBack}
      >
        Назад
      </button>
    </section>
  )
}

export default Notfound;
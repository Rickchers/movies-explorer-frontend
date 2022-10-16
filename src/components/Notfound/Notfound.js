import "./Notfound.css";

function Notfound() {
  return (
    <section className="notfound">
      <h1 className="notfound__title">404</h1>
      <h2 className="notfound__subtitle">Страница не найдена</h2>
      <a href="/" className="notfound__link-back">Назад</a>
    </section>
  )
}

export default Notfound;
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <div className="footer__end">
          <p className="footer__date">&copy;2022</p>
          <div className="footer__links">
            <p className="footer__link-one">Яндекс.Практикум</p>
            <p className="footer__link-two">Github</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer; 

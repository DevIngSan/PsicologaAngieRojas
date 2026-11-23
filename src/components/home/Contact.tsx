import { contact } from '../../data/home'
import { site } from '../../data/site'

export function Contact() {
  return (
    <section id="contacto" className="section-padding">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-4 col-md-12">
            <img src="/imagenes/psicologiaint1.jpg" className="contact-photo" alt="LOGO PSICO ANRO" />
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="contact-panel">
              <h2>Contacto</h2>
              <p>{contact.text}</p>
              <ul className="contact-list">
                <li>
                  <i className="bi bi-whatsapp" />
                  {site.phoneDisplay}
                </li>
                <li>
                  <i className="bi bi-envelope" />
                  {site.email}
                </li>
                <li>
                  <i className="bi bi-clock" />
                  {site.hours}
                </li>
              </ul>
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-agenda"
              >
                Agenda tu cita
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import { Link } from 'react-router-dom'
import { about } from '../../data/home'
import { site } from '../../data/site'

export function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <p className="hero-kicker">{site.name}</p>
            <h1>Terapias personalizadas para tu bienestar emocional</h1>
            <p className="hero-lead">{about.paragraphs[3]}</p>
            <div className="hero-actions">
              <a
                href={site.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-agenda"
              >
                Agenda tu cita
              </a>
              <Link to="/#servicios" className="btn btn-suave">
                Ver servicios
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <img src="/imagenes/imagenpsicologa.jpeg" className="hero-photo" alt="Psicóloga Angie Rojas" />
          </div>
        </div>
      </div>
    </section>
  )
}

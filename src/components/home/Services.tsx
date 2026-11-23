import { Link } from 'react-router-dom'
import { services } from '../../data/services'

export function Services() {
  return (
    <section id="servicios" className="section-padding">
      <div className="container">
        <h2 className="section-title">Servicios</h2>
        <div className="row g-4 services-grid">
          {services.map((service) => (
            <div className="col-md-6 col-lg-3" key={service.path}>
              <article className="service-card">
                <img src={service.image} alt={service.imageAlt} />
                <div className="service-card-body">
                  <h3>{service.title}</h3>
                  <p>{service.paragraphs[0]}</p>
                  <Link to={service.path}>Ver más</Link>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

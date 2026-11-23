import { useEffect } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { services } from '../data/services'
import { site } from '../data/site'

export function ServicePage() {
  const { pathname } = useLocation()
  const service = services.find((item) => item.path === pathname)

  useEffect(() => {
    if (service) {
      document.title = `${service.title} | ${site.title}`
    }
  }, [service])

  if (!service) {
    return <Navigate to="/" replace />
  }

  return (
    <section className="service-page section-padding">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-md-6">
            <img src={service.image} alt={service.imageAlt} className="service-photo" />
          </div>
          <div className="col-md-6 service-copy">
            <h1>{service.title}</h1>
            {service.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-agenda mt-3"
            >
              Agenda tu cita
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

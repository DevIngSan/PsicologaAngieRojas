import { site } from '../../data/site'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container px-4 col-12">
        <div className="row">
          <div className="col-6 col-lg-4">
            <h3 className="pt-3 fw-bold" />
            <img src={site.logo} alt="LOGO_PSICO_ANRO" className="img-fluid mb-2" />
          </div>
          <div className="col col-lg-4">
            <h4 className="pt-3 fw-bold">CONTACTO</h4>
            <ul className="list-unstyled">
              <li>
                <i className="bi bi-whatsapp" />
                <span className="text-decoration-none text-light"> {site.phoneDisplay}</span>
              </li>
              <li>
                <i className="bi bi-envelope" />
                <span className="text-decoration-none text-light"> {site.email}</span>
              </li>
              <li>
                <i className="bi bi-clock" />
                <span className="text-decoration-none text-light"> {site.hours}</span>
              </li>
            </ul>
          </div>
          <div className="col-6 col-lg-3 text-lg-end">
            <h4 className="pt-3 fw-bold">Social Media</h4>
            <div>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none text-light"
              >
                <i className="bi bi-instagram" />
              </a>
              <a
                href={site.tiktok}
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none text-light"
              >
                <i className="bi bi-tiktok" />
              </a>
            </div>
          </div>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <p>{site.yearLabel}</p>
        </div>
      </div>
    </footer>
  )
}

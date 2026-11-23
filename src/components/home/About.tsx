import { about } from '../../data/home'
import { site } from '../../data/site'

export function About() {
  return (
    <section id="sobre-mi" className="about section-padding">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-4 col-md-12 text-center">
            <img src={site.logo} className="about-photo" alt="LOGO_PSICO_ANRO" />
          </div>
          <div className="col-lg-8 col-md-12">
            <div className="about-text">
              <h2>Sobre mí</h2>
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

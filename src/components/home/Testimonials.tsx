import { testimonials } from '../../data/testimonials'

export function Testimonials() {
  return (
    <section id="testimonios" className="section-padding">
      <div className="container">
        <h2 className="section-title">Testimonios</h2>
        <div className="row g-4 justify-content-center">
          {testimonials.map((item) => (
            <div className="col-12 col-lg-4" key={item.alt}>
              <article className="card mi-card">
                <div className="card-body">
                  <img src={item.image} className="avatar-cita" alt={item.alt} />
                  <p className="card-text">{item.quote}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

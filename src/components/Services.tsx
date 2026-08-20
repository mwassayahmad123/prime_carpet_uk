import { SERVICES } from '../data/siteData'

function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section__header">
          <p className="section__eyebrow">Our Services</p>
          <h2 className="section__title">What We Offer</h2>
          <p className="section__text section__text--center">
            Professional steam cleaning services to keep your home fresh, clean, and hygienic.
          </p>
        </div>
        <div className="services__grid">
          {SERVICES.map((service) => (
            <article key={service.title} className="service-card">
              <span className="service-card__icon">{service.icon}</span>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__text">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

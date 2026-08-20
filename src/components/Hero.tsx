function Hero() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero">
      <div className="hero__overlay" />
      <div className="container hero__content">
        <p className="hero__eyebrow">Prime Carpet Cleaning &amp; Upholstery Steam Cleaning</p>
        <h1 className="hero__title">
          Spotless Carpets,<br />
          <span>Fresh Upholstery</span>
        </h1>
        <p className="hero__subtitle">
          Professional steam cleaning for carpets, sofas, rugs, and upholstery.
          Book a free consultation and see why homeowners across the UK trust us.
        </p>
        <div className="hero__actions">
          <button className="btn btn--primary btn--lg" onClick={scrollToContact}>
            Book Free Consultation
          </button>
          <a href="#services" className="btn btn--outline btn--lg" onClick={(e) => {
            e.preventDefault()
            document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })
          }}>
            Our Services
          </a>
        </div>
        <div className="hero__stats">
          <div className="hero__stat">
            <strong>500+</strong>
            <span>Carpets Cleaned</span>
          </div>
          <div className="hero__stat">
            <strong>10+</strong>
            <span>Years Experience</span>
          </div>
          <div className="hero__stat">
            <strong>5.0</strong>
            <span>Customer Rating</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

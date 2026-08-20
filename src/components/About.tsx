function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <div className="about__visual">
          <div className="about__image">
            <div className="about__badge">
              <span>10+</span>
              <small>Years of Excellence</small>
            </div>
          </div>
        </div>
        <div className="about__content">
          <p className="section__eyebrow">About Us</p>
          <h2 className="section__title">Your Trusted Cleaning Experts</h2>
          <p className="section__text">
            At Prime Carpet Cleaning and Upholstery Steam Cleaning, we specialise in
            bringing carpets, rugs, and furniture back to life using professional-grade
            steam extraction equipment.
          </p>
          <p className="section__text">
            From your first free consultation to the finished result, we deliver reliable,
            eco-friendly cleaning with transparent pricing and no hidden fees.
          </p>
          <ul className="about__features">
            <li>
              <span className="about__check">✓</span>
              Certified carpet &amp; upholstery cleaning specialists
            </li>
            <li>
              <span className="about__check">✓</span>
              Eco-friendly, pet-safe cleaning solutions
            </li>
            <li>
              <span className="about__check">✓</span>
              Transparent pricing with no hidden fees
            </li>
            <li>
              <span className="about__check">✓</span>
              Convenient booking via WhatsApp
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About

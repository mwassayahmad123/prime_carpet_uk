import { GALLERY_IMAGES } from '../data/siteData'

function Gallery() {
  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <div className="section__header">
          <p className="section__eyebrow">Gallery</p>
          <h2 className="section__title">Our Work</h2>
          <p className="section__text section__text--center">
            See the difference professional carpet and upholstery steam cleaning makes.
          </p>
        </div>
        <div className="gallery__grid">
          {GALLERY_IMAGES.map((image) => (
            <figure key={image.src} className="gallery__item">
              <img src={image.src} alt={image.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery

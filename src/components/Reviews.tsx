import { REVIEWS } from '../data/siteData'

function StarRating({ count }: { count: number }) {
  return (
    <div className="stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }, (_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  )
}

function Reviews() {
  return (
    <section id="reviews" className="section reviews">
      <div className="container">
        <div className="section__header">
          <p className="section__eyebrow">Reviews</p>
          <h2 className="section__title">What Our Clients Say</h2>
          <p className="section__text section__text--center">
            Don't just take our word for it — hear from homeowners who've used our steam cleaning services.
          </p>
        </div>
        <div className="reviews__grid">
          {REVIEWS.map((review) => (
            <article key={review.name} className="review-card">
              <StarRating count={review.rating} />
              <p className="review-card__text">"{review.text}"</p>
              <p className="review-card__author">{review.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews

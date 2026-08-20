import { useState } from 'react'
import { FAQ_ITEMS } from '../data/siteData'

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="section faq">
      <div className="container">
        <div className="section__header">
          <p className="section__eyebrow">FAQ</p>
          <h2 className="section__title">Frequently Asked Questions</h2>
          <p className="section__text section__text--center">
            Find answers to common questions. Can't find what you need? Get in touch below.
          </p>
        </div>
        <div className="faq__list">
          {FAQ_ITEMS.map((item, index) => (
            <div
              key={index}
              className={`faq__item ${openIndex === index ? 'is-open' : ''}`}
            >
              <button
                className="faq__question"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                {item.question}
                <span className="faq__icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              <div className="faq__answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

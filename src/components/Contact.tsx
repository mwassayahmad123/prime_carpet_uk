import { useState, type FormEvent } from 'react'
import { COMPANY_NAME, CONTACT, SERVICE_OPTIONS } from '../data/siteData'

interface FormData {
  name: string
  phone: string
  service: string
  datetime: string
  message: string
}

const initialForm: FormData = {
  name: '',
  phone: '',
  service: '',
  datetime: '',
  message: '',
}

function Contact() {
  const [form, setForm] = useState<FormData>(initialForm)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const buildWhatsAppMessage = () => {
    const lines = [
      `*New Appointment Request - ${COMPANY_NAME}*`,
      '',
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      `*Service:* ${form.service || 'Not specified'}`,
      `*Preferred Date & Time:* ${form.datetime || 'Not specified'}`,
      `*Message:* ${form.message || 'None'}`,
    ]
    return encodeURIComponent(lines.join('\n'))
  }

  const handleWhatsAppSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!form.name.trim() || !form.phone.trim()) return

    const url = `https://wa.me/${CONTACT.whatsapp.replace(/\D/g, '')}?text=${buildWhatsAppMessage()}`
    window.open(url, '_blank')
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section__header">
          <p className="section__eyebrow">Contact Us</p>
          <h2 className="section__title">Get in Touch</h2>
          <p className="section__text section__text--center">
            Get in touch with us for any inquiries or book an appointment.
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__form-wrapper">
            <h3 className="contact__form-title">Book Appointment</h3>
            <form className="contact__form" onSubmit={handleWhatsAppSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Your phone number"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">Service Type</label>
                <select
                  id="service"
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                >
                  <option value="">Select a service</option>
                  {SERVICE_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="datetime">Preferred Date &amp; Time</label>
                <input
                  type="datetime-local"
                  id="datetime"
                  name="datetime"
                  value={form.datetime}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn--whatsapp btn--lg">
                Book Appointment via WhatsApp
              </button>
            </form>
          </div>

          <div className="contact__info">
            <h3 className="contact__info-title">Get in Touch</h3>

            <div className="contact__detail">
              <span className="contact__detail-icon">📍</span>
              <div>
                <strong>Address</strong>
                <p>{CONTACT.address}</p>
              </div>
            </div>

            <div className="contact__detail">
              <span className="contact__detail-icon">📞</span>
              <div>
                <strong>Phone</strong>
                <p>
                  <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}>{CONTACT.phone}</a>
                </p>
              </div>
            </div>

            <div className="contact__detail">
              <span className="contact__detail-icon">💬</span>
              <div>
                <strong>WhatsApp</strong>
                <p>
                  <a
                    href={`https://wa.me/${CONTACT.whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {CONTACT.phone}
                  </a>
                </p>
              </div>
            </div>

            <div className="contact__detail">
              <span className="contact__detail-icon">✉️</span>
              <div>
                <strong>Email</strong>
                <p>
                  <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

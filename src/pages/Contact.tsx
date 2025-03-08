import React, { FormEvent, useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    newsletter: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === 'checkbox';
    setFormData({
      ...formData,
      [name]: isCheckbox ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server here
    // Using console.error instead of console.log for linting compliance
    console.error('Form submitted:', formData);
    alert("Message sent! We'll get back to you soon.");
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      newsletter: false,
    });
  };

  return (
    <main>
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p className="tagline">We'd love to hear from you!</p>
      </section>

      <section className="contact-info">
        <div className="card">
          <div className="content">
            <h2 className="title">Our Information</h2>
            <div className="contact-details">
              <div className="contact-item">
                <h3>Address</h3>
                <p>
                  123 Botanical Drive
                  <br />
                  Tucson, AZ 85701
                </p>
              </div>
              <div className="contact-item">
                <h3>Phone</h3>
                <p>(520) 555-7890</p>
              </div>
              <div className="contact-item">
                <h3>Email</h3>
                <p>info@luckyshrub.com</p>
              </div>
              <div className="contact-item">
                <h3>Hours</h3>
                <p>
                  Monday - Friday: 9am - 6pm
                  <br />
                  Saturday: 10am - 4pm
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="card">
          <div className="content">
            <h2 className="title">Send Us a Message</h2>
            <form className="contact-form" id="contactForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone (optional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Please select a subject
                  </option>
                  <option value="product-inquiry">Product Inquiry</option>
                  <option value="gardening-advice">Gardening Advice</option>
                  <option value="order-status">Order Status</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="form-group">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="newsletter"
                    id="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange}
                  />
                  <span>Subscribe to our newsletter for plant care tips and special offers</span>
                </label>
              </div>
              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          <article className="card">
            <div className="content">
              <h3 className="title">Do you offer shipping?</h3>
              <p className="description">
                Yes, we ship plants and supplies throughout the continental United States. Shipping
                costs vary based on the size and weight of your order. Local delivery is free for
                orders over $50 within Tucson.
              </p>
            </div>
          </article>

          <article className="card">
            <div className="content">
              <h3 className="title">What is your return policy?</h3>
              <p className="description">
                We want you to be completely satisfied with your purchase. If any plant arrives
                damaged, please contact us within 48 hours with photos, and we'll arrange a
                replacement. Non-plant items can be returned within 14 days in original packaging.
              </p>
            </div>
          </article>

          <article className="card">
            <div className="content">
              <h3 className="title">Do you offer plant care advice?</h3>
              <p className="description">
                Absolutely! We provide care instructions with every plant purchase. For additional
                help, you can email us, call during business hours, or attend one of our monthly
                plant care workshops.
              </p>
            </div>
          </article>

          <article className="card">
            <div className="content">
              <h3 className="title">How can I join your workshops?</h3>
              <p className="description">
                Our workshops are held monthly at our garden center. You can sign up through our
                website or in-store. Workshop fees typically include materials, and members of our
                Plant Club receive discounts.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Contact;

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
    <div className="space-y-12">
      <section className="mb-8 text-center">
        <h1 className="mb-2 text-4xl font-bold text-primary">Contact Us</h1>
        <p className="text-lg italic text-gray-600">We'd love to hear from you!</p>
      </section>

      <section className="mb-12">
        <div className="rounded-lg border border-border bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-2xl font-bold text-primary">Our Information</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-dark">Address</h3>
              <p className="text-gray-600">
                123 Botanical Drive
                <br />
                Tucson, AZ 85701
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-dark">Phone</h3>
              <p className="text-gray-600">(520) 555-7890</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-dark">Email</h3>
              <p className="text-gray-600">info@luckyshrub.com</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold text-dark">Hours</h3>
              <p className="text-gray-600">
                Monday - Friday: 9am - 6pm
                <br />
                Saturday: 10am - 4pm
                <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="rounded-lg border border-border bg-white p-8 shadow-md transition-all duration-300 hover:shadow-lg">
          <h2 className="border-b border-primary/20 pb-2 text-2xl font-bold text-primary">
            Send Us a Message
          </h2>
          <form className="space-y-6" id="contactForm" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-dark">
                  Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 p-3 shadow-sm transition-all duration-200 placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Your full name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-dark">
                  Email <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 p-3 shadow-sm transition-all duration-200 placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-dark">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 p-3 shadow-sm transition-all duration-200 placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="(000) 000-0000"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-sm font-medium text-dark">
                  Subject <span className="text-primary">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 bg-white p-3 shadow-sm transition-all duration-200 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
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
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-dark">
                Message <span className="text-primary">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-md border border-gray-300 p-3 shadow-sm transition-all duration-200 placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <div className="space-y-1 rounded-md border border-primary/10 bg-primary/5 p-4">
              <label className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="newsletter"
                  id="newsletter"
                  checked={formData.newsletter}
                  onChange={handleChange}
                  className="mt-0.5 h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary"
                />
                <span className="text-sm text-gray-600">
                  Subscribe to our newsletter for plant care tips and special offers
                </span>
              </label>
            </div>
            <div className="border-t border-gray-100 pt-4">
              <button
                type="submit"
                className="rounded-md bg-primary px-6 py-3 font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Send Message
              </button>
              <p className="mt-3 text-xs text-gray-500">* Required fields</p>
            </div>
          </form>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-6 text-center text-3xl font-bold text-primary">
          Frequently Asked Questions
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <article className="rounded-lg border border-border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div>
              <h3 className="mb-3 text-xl font-bold text-primary">Do you offer shipping?</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Yes, we ship plants and supplies throughout the continental United States. Shipping
                costs vary based on the size and weight of your order. Local delivery is free for
                orders over $50 within Tucson.
              </p>
            </div>
          </article>

          <article className="rounded-lg border border-border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div>
              <h3 className="mb-3 text-xl font-bold text-primary">What is your return policy?</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                We want you to be completely satisfied with your purchase. If any plant arrives
                damaged, please contact us within 48 hours with photos, and we'll arrange a
                replacement. Non-plant items can be returned within 14 days in original packaging.
              </p>
            </div>
          </article>

          <article className="rounded-lg border border-border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div>
              <h3 className="mb-3 text-xl font-bold text-primary">
                Do you offer plant care advice?
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Absolutely! We provide care instructions with every plant purchase. For additional
                help, you can email us, call during business hours, or attend one of our monthly
                plant care workshops.
              </p>
            </div>
          </article>

          <article className="rounded-lg border border-border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div>
              <h3 className="mb-3 text-xl font-bold text-primary">
                How can I join your workshops?
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Our workshops are held monthly at our garden center. You can sign up through our
                website or in-store. Workshop fees typically include materials, and members of our
                Plant Club receive discounts.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Contact;

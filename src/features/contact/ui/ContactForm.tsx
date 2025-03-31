import React from 'react';
import useContactForm from '../lib/hooks/useContactForm';
import InputField from '../../../shared/ui/InputField';

const ContactForm: React.FC = () => {
  const { register, handleSubmit, errors, isSubmitting } = useContactForm();

  return (
    <section className="mb-12">
      <div className="rounded-lg border border-border bg-white p-8 shadow-md transition-all duration-300 hover:shadow-lg">
        <h2 className="border-b border-primary/20 pb-2 text-2xl font-bold text-primary">
          Send Us a Message
        </h2>
        <form className="space-y-6 pt-6" id="contactForm" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <InputField
              id="name"
              name="name"
              label="Name"
              required
              register={register('name', {
                required: 'Name is required',
              })}
              error={errors.name?.message}
              placeholder="Your full name"
            />
            <InputField
              id="email"
              name="email"
              label="Email"
              type="email"
              required
              register={register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
              error={errors.email?.message}
              placeholder="your.email@example.com"
            />
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <InputField
              id="phone"
              name="phone"
              label="Phone (optional)"
              type="tel"
              register={register('phone')}
              placeholder="(000) 000-0000"
            />
            <InputField
              id="subject"
              name="subject"
              label="Subject"
              type="select"
              required
              register={register('subject', {
                required: 'Please select a subject',
              })}
              error={errors.subject?.message}
              options={[
                { value: '', label: 'Please select a subject' },
                { value: 'product-inquiry', label: 'Product Inquiry' },
                { value: 'gardening-advice', label: 'Gardening Advice' },
                { value: 'order-status', label: 'Order Status' },
                { value: 'feedback', label: 'Feedback' },
                { value: 'other', label: 'Other' },
              ]}
            />
          </div>
          <InputField
            id="message"
            name="message"
            label="Message"
            type="textarea"
            required
            register={register('message', {
              required: 'Message is required',
            })}
            error={errors.message?.message}
            placeholder="How can we help you?"
          />
          <div className="space-y-1 rounded-md border border-primary/10 bg-primary/5 p-4">
            <label className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="newsletter"
                {...register('newsletter')}
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
              disabled={isSubmitting}
              className="rounded-md bg-primary px-6 py-3 font-medium text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-70"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            <p className="mt-3 text-xs text-gray-500">* Required fields</p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

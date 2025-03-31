import React from 'react';
import ContactInformation from '../features/contact/ui/ContactInformation';
import ContactForm from '../features/contact/ui/ContactForm';
import FAQSection from '../features/contact/ui/FAQSection';

const Contact: React.FC = () => {
  return (
    <div className="space-y-12">
      <section className="mb-8 text-center">
        <h1 className="mb-2 text-4xl font-bold text-primary">Contact Us</h1>
        <p className="text-lg italic text-gray-600">We'd love to hear from you!</p>
      </section>

      <ContactInformation />
      <ContactForm />
      <FAQSection />
    </div>
  );
};

export default Contact;

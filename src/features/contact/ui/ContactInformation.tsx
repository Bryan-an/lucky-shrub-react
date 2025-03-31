import React from 'react';
import ContactInfoItem from './ContactInfoItem';

const ContactInformation: React.FC = () => (
  <section className="mb-12">
    <div className="rounded-lg border border-border bg-white p-6 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold text-primary">Our Information</h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <ContactInfoItem title="Address">
          123 Botanical Drive
          <br />
          Tucson, AZ 85701
        </ContactInfoItem>
        <ContactInfoItem title="Phone">(520) 555-7890</ContactInfoItem>
        <ContactInfoItem title="Email">info@luckyshrub.com</ContactInfoItem>
        <ContactInfoItem title="Hours">
          Monday - Friday: 9am - 6pm
          <br />
          Saturday: 10am - 4pm
          <br />
          Sunday: Closed
        </ContactInfoItem>
      </div>
    </div>
  </section>
);

export default ContactInformation;

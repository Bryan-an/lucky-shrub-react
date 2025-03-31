import React from 'react';

type ContactInfoItemProps = {
  title: string;
  children: React.ReactNode;
};

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ title, children }) => (
  <div className="space-y-2">
    <h3 className="text-lg font-semibold text-dark">{title}</h3>
    <p className="text-gray-600">{children}</p>
  </div>
);

export default ContactInfoItem;

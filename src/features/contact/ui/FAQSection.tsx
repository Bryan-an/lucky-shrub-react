import React from 'react';
import FAQItem from './FAQItem';

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: 'Do you offer shipping?',
      answer:
        'Yes, we ship plants and supplies throughout the continental United States. Shipping costs vary based on the size and weight of your order. Local delivery is free for orders over $50 within Tucson.',
    },
    {
      question: 'What is your return policy?',
      answer:
        "We want you to be completely satisfied with your purchase. If any plant arrives damaged, please contact us within 48 hours with photos, and we'll arrange a replacement. Non-plant items can be returned within 14 days in original packaging.",
    },
    {
      question: 'Do you offer plant care advice?',
      answer:
        'Absolutely! We provide care instructions with every plant purchase. For additional help, you can email us, call during business hours, or attend one of our monthly plant care workshops.',
    },
    {
      question: 'How can I join your workshops?',
      answer:
        'Our workshops are held monthly at our garden center. You can sign up through our website or in-store. Workshop fees typically include materials, and members of our Plant Club receive discounts.',
    },
  ];

  return (
    <section className="mb-8">
      <h2 className="mb-6 text-center text-3xl font-bold text-primary">
        Frequently Asked Questions
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default FAQSection;

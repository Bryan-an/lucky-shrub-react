import React from 'react';

type FAQItemProps = {
  question: string;
  answer: string;
};

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => (
  <article className="rounded-lg border border-border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
    <div>
      <h3 className="mb-3 text-xl font-bold text-primary">{question}</h3>
      <p className="text-sm leading-relaxed text-gray-600">{answer}</p>
    </div>
  </article>
);

export default FAQItem;

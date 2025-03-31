import React from 'react';
import { Product } from '@/entities/product/model'; // Updated path

// Helper component to render a single product card
const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const articleClasses = [
    'overflow-hidden rounded-lg border border-border bg-white shadow-sm',
    'transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:transform hover:shadow-md',
    product.layoutSpan, // Add layout span class if it exists
  ]
    .filter(Boolean) // Remove undefined/null values
    .join(' ');

  const imageClasses = [
    'aspect-square w-full object-cover object-center',
    product.featured ? 'first:aspect-video' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <article className={articleClasses}>
      <img src={product.image} alt={product.name} className={imageClasses} />
      <div className="p-4">
        <h2 className="text-2xl font-bold text-primary">{product.name}</h2>
        <div className="mb-3 mt-2 flex flex-wrap gap-2">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="bg-accent rounded-full px-2 py-0.5 text-sm font-semibold text-dark"
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="text-text-light mt-2 text-base leading-6">{product.description}</p>
        <p className="mt-3 text-2xl font-bold text-secondary">{product.price}</p>
      </div>
    </article>
  );
};

export default ProductCard;

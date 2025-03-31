import React from 'react';
import { products, Product } from '../data/products'; // Import product data

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

const Products: React.FC = () => {
  // Group products by category
  const categories = Array.from(new Set(products.map((p) => p.category)));
  const groupedProducts = categories.reduce(
    (acc, category) => {
      acc[category] = products.filter((p) => p.category === category);
      return acc;
    },
    {} as Record<string, Product[]>,
  );

  return (
    <main className="mt-12 flex-1">
      <section className="mb-8 text-center">
        <h1 className="mb-2 text-4xl text-primary">Our Products</h1>
        <p className="text-text-light text-xl italic">
          Quality plants and supplies for every garden enthusiast
        </p>
      </section>

      {/* Dynamically render sections based on categories */}
      {categories.map((category) => (
        <section key={category} className="mb-16">
          <h2 className="mb-4 text-2xl font-bold text-primary">{category}</h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {groupedProducts[category].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};

export default Products;

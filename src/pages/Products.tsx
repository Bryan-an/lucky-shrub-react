import React from 'react';
import { products, Product } from '../entities/product/model'; // Corrected path again
import ProductCard from '../entities/product/ui/ProductCard'; // Corrected path again

const Products: React.FC = () => {
  // Get unique category names (ensuring they are strings)
  const categories: string[] = Array.from(new Set(products.map((p: Product) => p.category)));

  // Group products by category
  const groupedProducts = categories.reduce(
    (acc: Record<string, Product[]>, category: string) => {
      acc[category] = products.filter((p: Product) => p.category === category);
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
      {categories.map((category: string) => (
        <section key={category} className="mb-16">
          <h2 className="mb-4 text-2xl font-bold text-primary">{category}</h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {/* Ensure category exists in groupedProducts before mapping */}
            {groupedProducts[category]?.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};

export default Products;

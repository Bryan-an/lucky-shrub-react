import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '@/entities/product/model';
import { useCartStore } from '@/entities/cart/model/store';
import { cn } from '@/shared/lib/utils/cn';

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find((p) => p.id === productId);
  const addItem = useCartStore((state) => state.addItem);
  const cartItems = useCartStore((state) => state.items);

  const handleAddToCart = () => {
    if (product) {
      addItem(product);
    }
  };

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="mb-4 text-4xl font-bold text-red-600">Product Not Found</h1>
        <p className="mb-6 text-lg text-text-light">
          Sorry, we couldn't find a product with that ID.
        </p>
        <Link
          to="/products"
          className="rounded-md bg-primary px-6 py-3 font-medium text-white shadow-sm transition-colors hover:bg-primary/90"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  const isInCart = cartItems.some((item) => item.id === product.id);

  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-lg">
      <div className="grid gap-6 md:grid-cols-2">
        {/* Image Column */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="aspect-square w-full rounded-lg object-cover shadow-md"
          />
        </div>

        {/* Details Column */}
        <div className="flex flex-col justify-center">
          <h1 className="mb-2 text-4xl font-bold text-primary">{product.name}</h1>
          <p className="mb-4 text-3xl font-semibold text-secondary">{product.price}</p>

          <div className="mb-4 flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-accent px-3 py-1 text-sm font-semibold text-dark"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="mb-6 text-base leading-relaxed text-text-light">{product.description}</p>

          {/* Add to Cart Button */}
          <button
            type="button"
            onClick={handleAddToCart}
            disabled={isInCart}
            className={cn(
              'w-full rounded-md px-8 py-3 font-semibold text-white shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 md:w-auto',
              isInCart ? 'cursor-not-allowed bg-gray-400' : 'bg-primary hover:bg-primary/90',
            )}
          >
            {isInCart ? 'Added to Cart' : 'Add to Cart'}
          </button>

          <div className="mt-6">
            <Link to="/products" className="text-primary hover:underline">
              {'←'} Back to Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

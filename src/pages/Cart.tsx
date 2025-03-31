import React from 'react';
import { Link } from 'react-router-dom';
import { useCartStore, CartItem } from '@/entities/cart/model/store';

const CartPage: React.FC = () => {
  const { items, removeItem, updateQuantity, clearCart } = useCartStore((state) => state);

  const handleQuantityChange = (item: CartItem, event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (!isNaN(newQuantity)) {
      updateQuantity(item.id, newQuantity); // Quantity updated/item removed in store logic
    }
  };

  const calculateSubtotal = (item: CartItem) => {
    // Extract numeric price, handle potential errors
    const priceMatch = item.price.match(/[\d.]+/);
    const price = priceMatch ? parseFloat(priceMatch[0]) : 0;
    return (price * item.quantity).toFixed(2);
  };

  const calculateTotal = () => {
    return items
      .reduce((total, item) => {
        const priceMatch = item.price.match(/[\d.]+/);
        const price = priceMatch ? parseFloat(priceMatch[0]) : 0;
        return total + price * item.quantity;
      }, 0)
      .toFixed(2);
  };

  return (
    <div className="space-y-8">
      <section className="mb-8 text-center">
        <h1 className="mb-2 text-4xl font-bold text-primary">Your Shopping Cart</h1>
      </section>

      {items.length === 0 ? (
        <div className="text-center">
          <p className="mb-4 text-xl text-text-light">Your cart is empty.</p>
          <Link
            to="/products"
            className="rounded-md bg-primary px-6 py-3 font-medium text-white shadow-sm transition-colors hover:bg-primary/90"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="rounded-lg border border-border bg-white p-6 shadow-sm">
          {/* Cart Items Table/List */}
          <div className="mb-6 space-y-4">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-start gap-4 border-b border-border pb-4 last:border-b-0 sm:flex-row sm:items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-20 w-20 flex-shrink-0 rounded object-cover"
                />
                <div className="flex-grow">
                  <Link to={`/products/${item.id}`} className="hover:underline">
                    <h2 className="text-lg font-semibold text-primary">{item.name}</h2>
                  </Link>
                  <p className="text-sm text-text-light">Price: {item.price}</p>
                </div>
                <div className="flex flex-shrink-0 items-center gap-3">
                  <label htmlFor={`quantity-${item.id}`} className="sr-only">
                    Quantity
                  </label>
                  <input
                    id={`quantity-${item.id}`}
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item, e)}
                    className="w-16 rounded border border-border px-2 py-1 text-center"
                    aria-label={`Quantity for ${item.name}`}
                  />
                  <p className="w-20 text-right font-medium text-dark">
                    ${calculateSubtotal(item)}
                  </p>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                    aria-label={`Remove ${item.name} from cart`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary & Actions */}
          <div className="border-t border-border pt-6">
            <div className="flex items-start justify-between">
              <button
                onClick={clearCart}
                className="rounded-md border border-red-300 px-4 py-2 text-sm text-red-600 hover:bg-red-50"
              >
                Clear Cart
              </button>
              <div className="text-right">
                <p className="text-lg font-semibold text-dark">
                  Total: <span className="text-xl">${calculateTotal()}</span>
                </p>
                <p className="text-sm text-text-light">Shipping calculated at checkout</p>
                <button
                  type="button"
                  className="mt-4 w-full rounded-md bg-primary px-6 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:w-auto"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;

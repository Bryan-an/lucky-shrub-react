import React from 'react';
import logo from '@/shared/assets/images/asset-2@3x.png';
import { Link } from 'react-router-dom';
import { useCartStore } from '@/entities/cart/model/store';

const Header: React.FC = () => {
  const cartItemCount = useCartStore((state) => state.items.length);

  return (
    <header className="mb-8 flex flex-col items-center justify-between gap-4 pt-8 md:mb-12 md:flex-row md:pt-0">
      <Link to="/" className="shrink-0">
        <img src={logo} alt="Lucky Shrub logo" className="h-12 w-auto" />
      </Link>

      <p className="text-center text-xl italic text-secondary md:text-right">
        Your one-stop shop for green happiness!
      </p>

      <Link
        to="/cart"
        className="relative rounded-md p-2 text-dark transition-colors hover:bg-light"
        aria-label={`View Cart (${cartItemCount} items)`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
        {cartItemCount > 0 && (
          <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
            {cartItemCount}
          </span>
        )}
      </Link>
    </header>
  );
};

export default Header;

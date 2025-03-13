import React from 'react';
import ornamentalPlants from '../assets/images/ornamental-plants-at-home.webp';
import plant1 from '../assets/images/plant-1.webp';
import plant2 from '../assets/images/plant-2.webp';
import plant3 from '../assets/images/plant-3.webp';

const Home: React.FC = () => {
  return (
    <section className="mb-10">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        <article className="overflow-hidden rounded-lg border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md md:col-span-2 lg:col-span-3">
          <img
            src={ornamentalPlants}
            alt="Best Seller 1"
            className="aspect-[16/9] w-full object-cover object-center"
          />

          <div className="p-4">
            <h2 className="text-2xl font-bold text-primary">Indoor Garden Collection</h2>

            <div className="mb-3 mt-2 flex flex-wrap gap-2">
              <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs font-semibold text-dark">
                Featured
              </span>
              <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs font-semibold text-dark">
                Indoor
              </span>
              <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs font-semibold text-dark">
                Low Maintenance
              </span>
            </div>

            <p className="mt-2 text-base leading-relaxed text-gray-600">
              Transform your living space with our curated collection of beautiful, easy-to-care-for
              indoor plants. Perfect for beginners and plant enthusiasts alike, these air-purifying
              varieties thrive in various light conditions and bring a touch of nature to any room.
              Each plant comes with care instructions and a decorative pot.
            </p>
          </div>
        </article>

        <article className="overflow-hidden rounded-lg border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
          <img
            src={plant1}
            alt="Best Seller 2"
            className="aspect-square w-full object-cover object-center"
          />

          <div className="p-4">
            <h2 className="text-2xl font-bold text-primary">Desert Succulent Garden</h2>
            <div className="mb-3 mt-2 flex flex-wrap gap-2">
              <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs font-semibold text-dark">
                Drought Resistant
              </span>
              <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs font-semibold text-dark">
                Outdoor
              </span>
              <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs font-semibold text-dark">
                Native
              </span>
            </div>
            <p className="mt-2 text-base leading-relaxed text-gray-600">
              Our desert-friendly succulents are perfect for Tucson gardens and patios. These
              water-wise plants feature stunning shapes and textures that create dramatic landscape
              focal points with minimal maintenance.
            </p>
          </div>
        </article>

        <article className="overflow-hidden rounded-lg border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
          <img
            src={plant2}
            alt="Best Seller 3"
            className="aspect-square w-full object-cover object-center"
          />

          <div className="p-4">
            <h2 className="text-2xl font-bold text-primary">Herb & Vegetable Starter Kit</h2>
            <div className="mb-3 mt-2 flex flex-wrap gap-2">
              <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs font-semibold text-dark">
                Edible
              </span>
              <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs font-semibold text-dark">
                Seasonal
              </span>
              <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs font-semibold text-dark">
                Organic
              </span>
            </div>
            <p className="mt-2 text-base leading-relaxed text-gray-600">
              Grow your own food with our organic herb and vegetable starter kit. Each set includes
              6 seasonal varieties selected for the Arizona climate, organic soil, biodegradable
              pots, and detailed growing instructions for a successful home harvest.
            </p>
          </div>
        </article>

        <article className="overflow-hidden rounded-lg border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
          <img
            src={plant3}
            alt="Best Seller 4"
            className="aspect-square w-full object-cover object-center"
          />

          <div className="p-4">
            <h2 className="text-2xl font-bold text-primary">Patio Citrus Collection</h2>
            <div className="mb-3 mt-2 flex flex-wrap gap-2">
              <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs font-semibold text-dark">
                Fruit-bearing
              </span>
              <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs font-semibold text-dark">
                Container-friendly
              </span>
              <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs font-semibold text-dark">
                Fragrant
              </span>
            </div>
            <p className="mt-2 text-base leading-relaxed text-gray-600">
              Enjoy homegrown citrus with our dwarf Meyer Lemon, Key Lime, and Kumquat trees. These
              compact varieties are perfect for patios and sunny spots around your home. Our citrus
              plants are specially grafted for earlier fruiting and come with care guides specific
              to the Arizona climate.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Home;

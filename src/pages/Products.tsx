import React from 'react';

const Products: React.FC = () => {
  return (
    <main className="mt-12 flex-1">
      <section className="mb-8 text-center">
        <h1 className="mb-2 text-4xl text-primary">Our Products</h1>
        <p className="text-text-light text-xl italic">
          Quality plants and supplies for every garden enthusiast
        </p>
      </section>

      {/* Indoor Plants Section */}
      <section className="mb-16">
        <h2 className="mb-4 text-2xl font-bold text-primary">Indoor Plants</h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <article className="overflow-hidden rounded-lg border border-border bg-white shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:transform hover:shadow-md md:col-span-2 lg:col-span-3">
            <img
              src="https://images.pexels.com/photos/3125195/pexels-photo-3125195.jpeg"
              alt="Monstera Deliciosa"
              className="aspect-square w-full object-cover object-center first:aspect-video"
            />

            <div className="p-4">
              <h2 className="text-2xl font-bold text-primary">Monstera Deliciosa</h2>

              <div className="mb-3 mt-2 flex flex-wrap gap-2">
                <span className="bg-accent rounded-full px-2 py-0.5 text-sm font-semibold text-dark">
                  Indoor
                </span>
                <span className="bg-accent rounded-full px-2 py-0.5 text-sm font-semibold text-dark">
                  Popular
                </span>
                <span className="bg-accent rounded-full px-2 py-0.5 text-sm font-semibold text-dark">
                  Air Purifying
                </span>
              </div>

              <p className="text-text-light mt-2 text-base leading-6">
                The Swiss Cheese Plant features unique split leaves and is perfect for adding a
                tropical touch to your home. Easy to care for and grows well in bright, indirect
                light.
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-lg border border-border bg-white shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:transform hover:shadow-md">
            <img
              src="https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg"
              alt="Peace Lily"
              className="aspect-square w-full object-cover object-center"
            />

            <div className="p-4">
              <h2 className="text-2xl font-bold text-primary">Peace Lily</h2>
              <div className="mb-3 mt-2 flex flex-wrap gap-2">
                <span className="bg-accent rounded-full px-2 py-0.5 text-sm font-semibold text-dark">
                  Indoor
                </span>
                <span className="bg-accent rounded-full px-2 py-0.5 text-sm font-semibold text-dark">
                  Low Light
                </span>
                <span className="bg-accent rounded-full px-2 py-0.5 text-sm font-semibold text-dark">
                  Flowering
                </span>
              </div>
              <p className="text-text-light mt-2 text-base leading-6">
                An elegant flowering plant with glossy green leaves and white blooms. Peace Lilies
                thrive in low light conditions and help purify the air, making them ideal for
                bedrooms and offices.
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-lg border border-border bg-white shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:transform hover:shadow-md">
            <img
              src="https://images.pexels.com/photos/2123482/pexels-photo-2123482.jpeg"
              alt="Snake Plant"
              className="aspect-square w-full object-cover object-center"
            />

            <div className="p-4">
              <h2 className="text-2xl font-bold text-primary">Snake Plant</h2>
              <div className="mb-3 mt-2 flex flex-wrap gap-2">
                <span className="bg-accent rounded-full px-2 py-0.5 text-sm font-semibold text-dark">
                  Indoor
                </span>
                <span className="bg-accent rounded-full px-2 py-0.5 text-sm font-semibold text-dark">
                  Drought Tolerant
                </span>
                <span className="bg-accent rounded-full px-2 py-0.5 text-sm font-semibold text-dark">
                  Beginner Friendly
                </span>
              </div>
              <p className="text-text-light mt-2 text-base leading-6">
                Also known as Mother-in-Law's Tongue, this striking plant features tall leaves with
                yellow edges. Extremely low maintenance and excellent for air purification.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Outdoor Plants Section */}
      <section className="mb-16">
        <h2 className="mb-4 text-2xl font-bold text-primary">Outdoor Plants</h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <article className="overflow-hidden rounded-lg border border-border bg-white shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:transform hover:shadow-md md:col-span-2 lg:col-span-3">
            <img
              src="https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg"
              alt="Lavender"
              className="aspect-square w-full object-cover object-center first:aspect-video"
            />

            <div className="p-4">
              <h2 className="text-2xl font-bold text-primary">Lavender</h2>

              <div className="mb-3 mt-2 flex flex-wrap gap-2">
                <span className="bg-accent rounded-full px-2 py-0.5 text-sm font-semibold text-dark">
                  Outdoor
                </span>
                <span className="bg-accent rounded-full px-2 py-0.5 text-sm font-semibold text-dark">
                  Fragrant
                </span>
                <span className="bg-accent rounded-full px-2 py-0.5 text-sm font-semibold text-dark">
                  Perennial
                </span>
              </div>

              <p className="text-text-light mt-2 text-base leading-6">
                This aromatic herb produces beautiful purple flowers and a calming scent. Perfect
                for garden borders, containers, and attracting pollinators. Drought-resistant once
                established.
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-lg border border-border bg-white shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:transform hover:shadow-md">
            <img
              src="https://images.pexels.com/photos/5858235/pexels-photo-5858235.jpeg"
              alt="Hydrangea"
              className="aspect-square w-full object-cover object-center"
            />

            <div className="p-4">
              <h2 className="text-2xl font-bold text-primary">Hydrangea</h2>
              <div className="mb-3 mt-2 flex flex-wrap gap-2">
                <span className="bg-accent rounded-full px-2 py-0.5 text-sm font-semibold text-dark">
                  Outdoor
                </span>
                <span className="bg-accent rounded-full px-2 py-0.5 text-sm font-semibold text-dark">
                  Flowering
                </span>
                <span className="bg-accent rounded-full px-2 py-0.5 text-sm font-semibold text-dark">
                  Shade Tolerant
                </span>
              </div>
              <p className="text-text-light mt-2 text-base leading-6">
                Known for their large, showy blooms that change color based on soil pH, hydrangeas
                add stunning visual interest to any landscape. These versatile shrubs thrive in
                partial shade and moist, well-draining soil.
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-lg border border-border bg-white shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:transform hover:shadow-md">
            <img
              src="https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg"
              alt="Desert Rose"
              className="aspect-square w-full object-cover object-center"
            />

            <div className="p-4">
              <h2 className="text-2xl font-bold text-primary">Desert Rose</h2>
              <div className="mb-3 mt-2 flex flex-wrap gap-2">
                <span className="bg-accent rounded-full px-2 py-0.5 text-sm font-semibold text-dark">
                  Outdoor
                </span>
                <span className="bg-accent rounded-full px-2 py-0.5 text-sm font-semibold text-dark">
                  Drought Resistant
                </span>
                <span className="bg-accent rounded-full px-2 py-0.5 text-sm font-semibold text-dark">
                  Flowering
                </span>
              </div>
              <p className="text-text-light mt-2 text-base leading-6">
                This striking succulent develops a thick, swollen trunk and produces vibrant pink or
                red flowers. Perfect for hot, dry gardens, it requires minimal water and thrives in
                full sun conditions.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Gardening Supplies Section */}
      <section className="mb-16">
        <h2 className="mb-4 text-2xl font-bold text-primary">Gardening Supplies</h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <article className="overflow-hidden rounded-lg border border-border bg-white shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:transform hover:shadow-md md:col-span-2 lg:col-span-3">
            <img
              src="https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg"
              alt="Premium Potting Soil"
              className="aspect-square w-full object-cover object-center first:aspect-video"
            />

            <div className="p-4">
              <h2 className="text-2xl font-bold text-primary">Premium Potting Soil</h2>

              <div className="mb-3 mt-2 flex flex-wrap gap-2">
                <span className="bg-accent rounded-full px-2 py-0.5 text-sm font-semibold text-dark">
                  Organic
                </span>
                <span className="bg-accent rounded-full px-2 py-0.5 text-sm font-semibold text-dark">
                  Multi-Purpose
                </span>
                <span className="bg-accent rounded-full px-2 py-0.5 text-sm font-semibold text-dark">
                  Nutrient-Rich
                </span>
              </div>

              <p className="text-text-light mt-2 text-base leading-6">
                Our premium organic potting mix is specially formulated for container plants. This
                nutrient-rich blend promotes healthy root development and provides excellent
                drainage while retaining moisture.
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-lg border border-border bg-white shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:transform hover:shadow-md">
            <img
              src="https://images.pexels.com/photos/1741696/pexels-photo-1741696.jpeg"
              alt="Ceramic Plant Pots"
              className="aspect-square w-full object-cover object-center"
            />

            <div className="p-4">
              <h2 className="text-2xl font-bold text-primary">Ceramic Plant Pots</h2>
              <div className="mb-3 mt-2 flex flex-wrap gap-2">
                <span className="bg-accent rounded-full px-2 py-0.5 text-sm font-semibold text-dark">
                  Decorative
                </span>
                <span className="bg-accent rounded-full px-2 py-0.5 text-sm font-semibold text-dark">
                  Various Sizes
                </span>
                <span className="bg-accent rounded-full px-2 py-0.5 text-sm font-semibold text-dark">
                  Indoor/Outdoor
                </span>
              </div>
              <p className="text-text-light mt-2 text-base leading-6">
                Elevate your plant display with our collection of handcrafted ceramic pots.
                Available in various sizes, colors, and designs to complement any decor. Each pot
                includes a drainage hole and saucer.
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-lg border border-border bg-white shadow-sm transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:transform hover:shadow-md">
            <img
              src="https://images.pexels.com/photos/2225375/pexels-photo-2225375.jpeg"
              alt="Garden Tool Set"
              className="aspect-square w-full object-cover object-center"
            />

            <div className="p-4">
              <h2 className="text-2xl font-bold text-primary">Garden Tool Set</h2>
              <div className="mb-3 mt-2 flex flex-wrap gap-2">
                <span className="bg-accent rounded-full px-2 py-0.5 text-sm font-semibold text-dark">
                  Essential Tools
                </span>
                <span className="bg-accent rounded-full px-2 py-0.5 text-sm font-semibold text-dark">
                  Ergonomic
                </span>
                <span className="bg-accent rounded-full px-2 py-0.5 text-sm font-semibold text-dark">
                  Durable
                </span>
              </div>
              <p className="text-text-light mt-2 text-base leading-6">
                This comprehensive set includes all the essential tools for gardening success:
                pruning shears, hand trowel, cultivator, weeder, and gloves. Made with durable
                materials and ergonomic handles for comfortable use.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Products;

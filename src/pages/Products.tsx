import React from 'react';

const Products: React.FC = () => {
  return (
    <main>
      <section className="about-hero">
        <h1>Our Products</h1>
        <p className="tagline">Quality plants and supplies for every garden enthusiast</p>
      </section>

      {/* Indoor Plants Section */}
      <section className="about-values">
        <h2>Indoor Plants</h2>
        <div className="best-sellers">
          <article className="card">
            <img
              src="https://images.pexels.com/photos/3125195/pexels-photo-3125195.jpeg"
              alt="Monstera Deliciosa"
              className="image"
            />

            <div className="content">
              <h2 className="title">Monstera Deliciosa</h2>

              <div className="labels">
                <span className="label">Indoor</span>
                <span className="label">Popular</span>
                <span className="label">Air Purifying</span>
              </div>

              <p className="description">
                The Swiss Cheese Plant features unique split leaves and is perfect for adding a
                tropical touch to your home. Easy to care for and grows well in bright, indirect
                light.
              </p>
            </div>
          </article>

          <article className="card">
            <img
              src="https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg"
              alt="Peace Lily"
              className="image"
            />

            <div className="content">
              <h2 className="title">Peace Lily</h2>
              <div className="labels">
                <span className="label">Indoor</span>
                <span className="label">Low Light</span>
                <span className="label">Flowering</span>
              </div>
              <p className="description">
                An elegant flowering plant with glossy green leaves and white blooms. Peace Lilies
                thrive in low light conditions and help purify the air, making them ideal for
                bedrooms and offices.
              </p>
            </div>
          </article>

          <article className="card">
            <img
              src="https://images.pexels.com/photos/2123482/pexels-photo-2123482.jpeg"
              alt="Snake Plant"
              className="image"
            />

            <div className="content">
              <h2 className="title">Snake Plant</h2>
              <div className="labels">
                <span className="label">Indoor</span>
                <span className="label">Drought Tolerant</span>
                <span className="label">Beginner Friendly</span>
              </div>
              <p className="description">
                Also known as Mother-in-Law's Tongue, this striking plant features tall leaves with
                yellow edges. Extremely low maintenance and excellent for air purification.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Outdoor Plants Section */}
      <section className="about-values">
        <h2>Outdoor Plants</h2>
        <div className="best-sellers">
          <article className="card">
            <img
              src="https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg"
              alt="Lavender"
              className="image"
            />

            <div className="content">
              <h2 className="title">Lavender</h2>

              <div className="labels">
                <span className="label">Outdoor</span>
                <span className="label">Fragrant</span>
                <span className="label">Perennial</span>
              </div>

              <p className="description">
                This aromatic herb produces beautiful purple flowers and a calming scent. Perfect
                for garden borders, containers, and attracting pollinators. Drought-resistant once
                established.
              </p>
            </div>
          </article>

          <article className="card">
            <img
              src="https://images.pexels.com/photos/5858235/pexels-photo-5858235.jpeg"
              alt="Hydrangea"
              className="image"
            />

            <div className="content">
              <h2 className="title">Hydrangea</h2>
              <div className="labels">
                <span className="label">Outdoor</span>
                <span className="label">Flowering</span>
                <span className="label">Shade Tolerant</span>
              </div>
              <p className="description">
                Known for their large, showy blooms that change color based on soil pH, hydrangeas
                add stunning visual interest to any landscape. These versatile shrubs thrive in
                partial shade and moist, well-draining soil.
              </p>
            </div>
          </article>

          <article className="card">
            <img
              src="https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg"
              alt="Desert Rose"
              className="image"
            />

            <div className="content">
              <h2 className="title">Desert Rose</h2>
              <div className="labels">
                <span className="label">Outdoor</span>
                <span className="label">Drought Resistant</span>
                <span className="label">Flowering</span>
              </div>
              <p className="description">
                This striking succulent develops a thick, swollen trunk and produces vibrant pink or
                red flowers. Perfect for hot, dry gardens, it requires minimal water and thrives in
                full sun conditions.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Gardening Supplies Section */}
      <section className="about-values">
        <h2>Gardening Supplies</h2>
        <div className="best-sellers">
          <article className="card">
            <img
              src="https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg"
              alt="Premium Potting Soil"
              className="image"
            />

            <div className="content">
              <h2 className="title">Premium Potting Soil</h2>

              <div className="labels">
                <span className="label">Organic</span>
                <span className="label">Multi-Purpose</span>
                <span className="label">Nutrient-Rich</span>
              </div>

              <p className="description">
                Our premium organic potting mix is specially formulated for container plants. This
                nutrient-rich blend promotes healthy root development and provides excellent
                drainage while retaining moisture.
              </p>
            </div>
          </article>

          <article className="card">
            <img
              src="https://images.pexels.com/photos/1741696/pexels-photo-1741696.jpeg"
              alt="Ceramic Plant Pots"
              className="image"
            />

            <div className="content">
              <h2 className="title">Ceramic Plant Pots</h2>
              <div className="labels">
                <span className="label">Decorative</span>
                <span className="label">Various Sizes</span>
                <span className="label">Indoor/Outdoor</span>
              </div>
              <p className="description">
                Elevate your plant display with our collection of handcrafted ceramic pots.
                Available in various sizes, colors, and designs to complement any decor. Each pot
                includes a drainage hole and saucer.
              </p>
            </div>
          </article>

          <article className="card">
            <img
              src="https://images.pexels.com/photos/2225375/pexels-photo-2225375.jpeg"
              alt="Garden Tool Set"
              className="image"
            />

            <div className="content">
              <h2 className="title">Garden Tool Set</h2>
              <div className="labels">
                <span className="label">Essential Tools</span>
                <span className="label">Ergonomic</span>
                <span className="label">Durable</span>
              </div>
              <p className="description">
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

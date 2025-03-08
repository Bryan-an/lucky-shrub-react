import React from 'react';
import ornamentalPlants from '../assets/images/ornamental-plants-at-home.webp';
import plant1 from '../assets/images/plant-1.webp';
import plant2 from '../assets/images/plant-2.webp';
import plant3 from '../assets/images/plant-3.webp';

const Home: React.FC = () => {
  return (
    <main>
      <section className="best-sellers">
        <article className="card">
          <img src={ornamentalPlants} alt="Best Seller 1" className="image" />

          <div className="content">
            <h2 className="title">Indoor Garden Collection</h2>

            <div className="labels">
              <span className="label">Featured</span>
              <span className="label">Indoor</span>
              <span className="label">Low Maintenance</span>
            </div>

            <p className="description">
              Transform your living space with our curated collection of beautiful, easy-to-care-for
              indoor plants. Perfect for beginners and plant enthusiasts alike, these air-purifying
              varieties thrive in various light conditions and bring a touch of nature to any room.
              Each plant comes with care instructions and a decorative pot option.
            </p>
          </div>
        </article>

        <article className="card">
          <img src={plant1} alt="Best Seller 2" className="image" />

          <div className="content">
            <h2 className="title">Desert Succulent Garden</h2>
            <div className="labels">
              <span className="label">Drought Resistant</span>
              <span className="label">Outdoor</span>
              <span className="label">Native</span>
            </div>
            <p className="description">
              Our desert-friendly succulents are perfect for Tucson gardens and patios. These
              water-wise plants feature stunning shapes and textures that create dramatic landscape
              focal points with minimal maintenance.
            </p>
          </div>
        </article>

        <article className="card">
          <img src={plant2} alt="Best Seller 3" className="image" />

          <div className="content">
            <h2 className="title">Herb & Vegetable Starter Kit</h2>
            <div className="labels">
              <span className="label">Edible</span>
              <span className="label">Seasonal</span>
              <span className="label">Organic</span>
            </div>
            <p className="description">
              Grow your own food with our organic herb and vegetable starter kit. Each set includes
              6 seasonal varieties selected for the Arizona climate, organic soil, biodegradable
              pots, and detailed growing instructions for a successful home harvest.
            </p>
          </div>
        </article>

        <article className="card">
          <img src={plant3} alt="Best Seller 4" className="image" />

          <div className="content">
            <h2 className="title">Patio Citrus Collection</h2>
            <div className="labels">
              <span className="label">Fruit-bearing</span>
              <span className="label">Container-friendly</span>
              <span className="label">Fragrant</span>
            </div>
            <p className="description">
              Enjoy homegrown citrus with our dwarf Meyer Lemon, Key Lime, and Kumquat trees. These
              compact varieties are perfect for patios and sunny spots around your home. Our citrus
              plants are specially grafted for earlier fruiting and come with care guides specific
              to the Arizona climate.
            </p>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Home;

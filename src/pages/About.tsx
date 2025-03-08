import React from 'react';
import ornamentalPlants from '../assets/images/ornamental-plants-at-home.webp';
import plant1 from '../assets/images/plant-1.webp';
import plant2 from '../assets/images/plant-2.webp';
import plant3 from '../assets/images/plant-3.webp';

const About: React.FC = () => {
  return (
    <main>
      <section className="about-hero">
        <h1>About Lucky Shrub</h1>
        <p className="tagline">Bringing nature to your doorstep since 2020</p>
      </section>

      <section className="about-story">
        <article className="card">
          <img src={ornamentalPlants} alt="Our Story" className="image" />

          <div className="content">
            <h2 className="title">Our Story</h2>

            <div className="labels">
              <span className="label">Established 2020</span>
              <span className="label">Family-Owned</span>
            </div>

            <p className="description">
              Lucky Shrub was founded in Tucson, Arizona, by garden enthusiasts Jason and Maria.
              What started as a small plant nursery has quickly grown into a thriving garden center
              and online store, offering a wide variety of plants, garden supplies, and expert
              advice to help customers create their perfect green space.
            </p>
          </div>
        </article>
      </section>

      <section className="about-mission">
        <article className="card">
          <img src={plant1} alt="Our Mission" className="image" />

          <div className="content">
            <h2 className="title">Our Mission</h2>
            <div className="labels">
              <span className="label">Sustainability</span>
              <span className="label">Education</span>
              <span className="label">Community</span>
            </div>
            <p className="description">
              At Lucky Shrub, we believe everyone deserves access to beautiful plants and the
              knowledge to care for them. We're committed to sustainable practices, environmental
              education, and building a community of plant enthusiasts who share our passion for
              bringing nature into everyday life.
            </p>
          </div>
        </article>
      </section>

      <section className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <article className="card">
            <img src={plant2} alt="Jason Martinez" className="image" />

            <div className="content">
              <h3 className="title">Jason Martinez</h3>
              <div className="labels">
                <span className="label">Co-Founder</span>
                <span className="label">Garden Expert</span>
              </div>
              <p className="description">
                With over 15 years of experience in landscape architecture, Jason brings his
                expertise and passion for sustainable gardening to Lucky Shrub. He specializes in
                desert-friendly plants and water-efficient landscaping.
              </p>
            </div>
          </article>

          <article className="card">
            <img src={plant3} alt="Maria Chen" className="image" />

            <div className="content">
              <h3 className="title">Maria Chen</h3>
              <div className="labels">
                <span className="label">Co-Founder</span>
                <span className="label">Plant Specialist</span>
              </div>
              <p className="description">
                Maria's background in botany and her love for indoor plants have helped shape Lucky
                Shrub's diverse collection. She leads our plant care workshops and enjoys helping
                customers find the perfect plants for their homes.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="about-values">
        <h2>Our Values</h2>
        <div className="values-grid">
          <article className="card">
            <div className="content">
              <h3 className="title">Sustainability</h3>
              <p className="description">
                We prioritize eco-friendly practices in everything we do, from sourcing plants
                locally to using biodegradable packaging materials.
              </p>
            </div>
          </article>

          <article className="card">
            <div className="content">
              <h3 className="title">Education</h3>
              <p className="description">
                We believe in empowering our customers with knowledge about plant care through
                workshops, guides, and personalized advice.
              </p>
            </div>
          </article>

          <article className="card">
            <div className="content">
              <h3 className="title">Community</h3>
              <p className="description">
                We're proud to be part of the Tucson community and participate in local events,
                partnerships, and initiatives that promote greenery in urban spaces.
              </p>
            </div>
          </article>

          <article className="card">
            <div className="content">
              <h3 className="title">Quality</h3>
              <p className="description">
                We stand behind the quality of our plants and products, carefully selecting and
                inspecting each item to ensure our customers receive only the best.
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default About;

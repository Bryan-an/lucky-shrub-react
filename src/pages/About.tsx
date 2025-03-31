import React from 'react';
import ornamentalPlants from '@/shared/assets/images/ornamental-plants-at-home.webp';
import plant1 from '@/shared/assets/images/plant-1.webp';
import plant2 from '@/shared/assets/images/plant-2.webp';
import plant3 from '@/shared/assets/images/plant-3.webp';

const About: React.FC = () => {
  return (
    <div className="space-y-12">
      <section className="mb-8 text-center">
        <h1 className="mb-2 text-4xl font-bold text-primary">About Lucky Shrub</h1>
        <p className="text-lg italic text-gray-600">Bringing nature to your doorstep since 2020</p>
      </section>

      <section className="mb-12">
        <article className="overflow-hidden rounded-lg border border-border bg-white shadow-sm">
          <div className="grid gap-4 md:grid-cols-2">
            <img
              src={ornamentalPlants}
              alt="Our Story"
              className="h-full w-full object-cover object-center"
            />

            <div className="p-6">
              <h2 className="mb-3 text-2xl font-bold text-primary">Our Story</h2>

              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-dark">
                  Established 2020
                </span>
                <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-dark">
                  Family-Owned
                </span>
              </div>

              <p className="text-base leading-relaxed text-gray-600">
                Lucky Shrub was founded in Tucson, Arizona, by garden enthusiasts Jason and Maria.
                What started as a small plant nursery has quickly grown into a thriving garden
                center and online store, offering a wide variety of plants, garden supplies, and
                expert advice to help customers create their perfect green space.
              </p>
            </div>
          </div>
        </article>
      </section>

      <section className="mb-12">
        <article className="overflow-hidden rounded-lg border border-border bg-white shadow-sm">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="order-2 p-6 md:order-1">
              <h2 className="mb-3 text-2xl font-bold text-primary">Our Mission</h2>
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-dark">
                  Sustainability
                </span>
                <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-dark">
                  Education
                </span>
                <span className="rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-dark">
                  Community
                </span>
              </div>
              <p className="text-base leading-relaxed text-gray-600">
                At Lucky Shrub, we believe everyone deserves access to beautiful plants and the
                knowledge to care for them. We're committed to sustainable practices, environmental
                education, and building a community of plant enthusiasts who share our passion for
                bringing nature into everyday life.
              </p>
            </div>
            <img
              src={plant1}
              alt="Our Mission"
              className="order-1 h-full w-full object-cover object-center md:order-2"
            />
          </div>
        </article>
      </section>

      <section className="mb-12">
        <h2 className="mb-6 text-center text-3xl font-bold text-primary">Meet Our Team</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="overflow-hidden rounded-lg border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <img
              src={plant2}
              alt="Jason Martinez"
              className="aspect-square w-full object-cover object-center"
            />

            <div className="p-4">
              <h3 className="mb-2 text-xl font-bold text-primary">Jason Martinez</h3>
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs font-semibold text-dark">
                  Co-Founder
                </span>
                <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs font-semibold text-dark">
                  Garden Expert
                </span>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                With over 15 years of experience in landscape architecture, Jason brings his
                expertise and passion for sustainable gardening to Lucky Shrub. He specializes in
                desert-friendly plants and water-efficient landscaping.
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-lg border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <img
              src={plant3}
              alt="Maria Chen"
              className="aspect-square w-full object-cover object-center"
            />

            <div className="p-4">
              <h3 className="mb-2 text-xl font-bold text-primary">Maria Chen</h3>
              <div className="mb-3 flex flex-wrap gap-2">
                <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs font-semibold text-dark">
                  Co-Founder
                </span>
                <span className="rounded-full bg-primary/20 px-2 py-0.5 text-xs font-semibold text-dark">
                  Plant Specialist
                </span>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">
                Maria's background in botany and her love for indoor plants have helped shape Lucky
                Shrub's diverse collection. She leads our plant care workshops and enjoys helping
                customers find the perfect plants for their homes.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-6 text-center text-3xl font-bold text-primary">Our Values</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-lg border border-border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div>
              <h3 className="mb-3 text-xl font-bold text-primary">Sustainability</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                We prioritize eco-friendly practices in everything we do, from sourcing plants
                locally to using biodegradable packaging materials.
              </p>
            </div>
          </article>

          <article className="rounded-lg border border-border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div>
              <h3 className="mb-3 text-xl font-bold text-primary">Education</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                We believe in empowering our customers with knowledge about plant care through
                workshops, guides, and personalized advice.
              </p>
            </div>
          </article>

          <article className="rounded-lg border border-border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div>
              <h3 className="mb-3 text-xl font-bold text-primary">Community</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                We're proud to be part of the Tucson community and participate in local events,
                partnerships, and initiatives that promote greenery in urban spaces.
              </p>
            </div>
          </article>

          <article className="rounded-lg border border-border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
            <div>
              <h3 className="mb-3 text-xl font-bold text-primary">Quality</h3>
              <p className="text-sm leading-relaxed text-gray-600">
                We stand behind the quality of our plants and products, carefully selecting and
                inspecting each item to ensure our customers receive only the best.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default About;

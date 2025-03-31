// src/data/products.ts

export interface Product {
  id: string;
  name: string;
  category: 'Indoor Plants' | 'Outdoor Plants' | 'Gardening Supplies';
  image: string;
  tags: string[];
  description: string;
  price: string; // Keep as string for simplicity, includes currency symbol
  featured?: boolean; // Optional: True for the first item in each category
  layoutSpan?: string; // Optional: e.g., 'md:col-span-2 lg:col-span-3' for featured items
}

export const products: Product[] = [
  // Indoor Plants
  {
    id: 'monstera',
    name: 'Monstera Deliciosa',
    category: 'Indoor Plants',
    image: 'https://images.pexels.com/photos/3125195/pexels-photo-3125195.jpeg',
    tags: ['Indoor', 'Popular', 'Air Purifying'],
    description:
      'The Swiss Cheese Plant features unique split leaves and is perfect for adding a tropical touch to your home. Easy to care for and grows well in bright, indirect light.',
    price: '$25.99',
    featured: true,
    layoutSpan: 'md:col-span-2 lg:col-span-3',
  },
  {
    id: 'peace-lily',
    name: 'Peace Lily',
    category: 'Indoor Plants',
    image: 'https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg',
    tags: ['Indoor', 'Low Light', 'Flowering'],
    description:
      'An elegant flowering plant with glossy green leaves and white blooms. Peace Lilies thrive in low light conditions and help purify the air, making them ideal for bedrooms and offices.',
    price: '$19.99',
  },
  {
    id: 'snake-plant',
    name: 'Snake Plant',
    category: 'Indoor Plants',
    image: 'https://images.pexels.com/photos/2123482/pexels-photo-2123482.jpeg',
    tags: ['Indoor', 'Drought Tolerant', 'Beginner Friendly'],
    description:
      "Also known as Mother-in-Law's Tongue, this striking plant features tall leaves with yellow edges. Extremely low maintenance and excellent for air purification.",
    price: '$22.50',
  },
  // Outdoor Plants
  {
    id: 'lavender',
    name: 'Lavender',
    category: 'Outdoor Plants',
    image: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg',
    tags: ['Outdoor', 'Fragrant', 'Perennial'],
    description:
      'This aromatic herb produces beautiful purple flowers and a calming scent. Perfect for garden borders, containers, and attracting pollinators. Drought-resistant once established.',
    price: '$15.00',
    featured: true,
    layoutSpan: 'md:col-span-2 lg:col-span-3',
  },
  {
    id: 'hydrangea',
    name: 'Hydrangea',
    category: 'Outdoor Plants',
    image: 'https://images.pexels.com/photos/5858235/pexels-photo-5858235.jpeg',
    tags: ['Outdoor', 'Flowering', 'Shade Tolerant'],
    description:
      'Known for their large, showy blooms that change color based on soil pH, hydrangeas add stunning visual interest to any landscape. These versatile shrubs thrive in partial shade and moist, well-draining soil.',
    price: '$35.75',
  },
  {
    id: 'desert-rose',
    name: 'Desert Rose',
    category: 'Outdoor Plants',
    image: 'https://images.pexels.com/photos/4503273/pexels-photo-4503273.jpeg',
    tags: ['Outdoor', 'Drought Resistant', 'Flowering'],
    description:
      'This striking succulent develops a thick, swollen trunk and produces vibrant pink or red flowers. Perfect for hot, dry gardens, it requires minimal water and thrives in full sun conditions.',
    price: '$29.95',
  },
  // Gardening Supplies
  {
    id: 'potting-soil',
    name: 'Premium Potting Soil',
    category: 'Gardening Supplies',
    image: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg',
    tags: ['Organic', 'Multi-Purpose', 'Nutrient-Rich'],
    description:
      'Our premium organic potting mix is specially formulated for container plants. This nutrient-rich blend promotes healthy root development and provides excellent drainage while retaining moisture.',
    price: '$12.99',
    featured: true,
    layoutSpan: 'md:col-span-2 lg:col-span-3',
  },
  {
    id: 'ceramic-pots',
    name: 'Ceramic Plant Pots',
    category: 'Gardening Supplies',
    image: 'https://images.pexels.com/photos/1741696/pexels-photo-1741696.jpeg',
    tags: ['Decorative', 'Various Sizes', 'Indoor/Outdoor'],
    description:
      'Elevate your plant display with our collection of handcrafted ceramic pots. Available in various sizes, colors, and designs to complement any decor. Each pot includes a drainage hole and saucer.',
    price: '$39.99 (Set of 3)',
  },
  {
    id: 'tool-set',
    name: 'Garden Tool Set',
    category: 'Gardening Supplies',
    image: 'https://images.pexels.com/photos/2225375/pexels-photo-2225375.jpeg',
    tags: ['Essential Tools', 'Ergonomic', 'Durable'],
    description:
      'This comprehensive set includes all the essential tools for gardening success: pruning shears, hand trowel, cultivator, weeder, and gloves. Made with durable materials and ergonomic handles for comfortable use.',
    price: '$45.00',
  },
];

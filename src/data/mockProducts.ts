import { Product, CategoryItem } from '../types';

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: 'prod-rc-adult',
    name: 'Royal Canin Adult Dog Food',
    brand: 'Royal Canin',
    category: 'Dog Food',
    price: 4850,
    originalPrice: 5200,
    rating: 4.9,
    reviewCount: 142,
    image: '/images/royal-canin.jpg',
    badge: 'Bestseller',
    description: 'Complete nutritional formula specifically tailored for medium breed adult dogs (11 to 25kg) supporting digestive health and natural defenses.'
  },
  {
    id: 'prod-whiskas-adult',
    name: 'Whiskas Cat Food',
    brand: 'Whiskas',
    category: 'Cat Food',
    price: 2400,
    originalPrice: 2750,
    rating: 4.8,
    reviewCount: 98,
    image: '/images/whiskas.png',
    badge: 'Popular',
    description: '100% complete and balanced adult nutrition featuring delicious chicken pockets with a crunchy outside and soft savory center.'
  },
  {
    id: 'prod-toy-ball',
    name: 'Interactive Dog Toy Ball',
    brand: 'PetPlay',
    category: 'Toys',
    price: 1250,
    originalPrice: 1500,
    rating: 4.9,
    reviewCount: 76,
    image: '/images/dog-toy-ball.png',
    badge: 'Trending',
    description: 'Smart self-rolling motion toy ball with obstacle sensor and LED glow to keep active pups mentally stimulated and entertained.'
  },
  {
    id: 'prod-grooming-brush',
    name: 'Pet Grooming Brush',
    brand: 'Frisco',
    category: 'Grooming Supplies',
    price: 950,
    originalPrice: 1150,
    rating: 4.8,
    reviewCount: 63,
    image: '/images/grooming-brush.jpg',
    badge: 'Essential',
    description: 'Ergonomic soft slicker brush with coated massage pins to gently untangle mats, deshed loose fur, and stimulate natural skin oils.'
  }
];

export const CATEGORIES: CategoryItem[] = [
  { id: 'dog-food', name: 'Dog Food', iconClass: 'css-cat-dogfood', bgColor: '#DDEBD5', iconColor: '#24543D' },
  { id: 'cat-food', name: 'Cat Food', iconClass: 'css-cat-catfood', bgColor: '#FFD15C', iconColor: '#203D40' },
  { id: 'treats', name: 'Treats & Snacks', iconClass: 'css-cat-treats', bgColor: '#F59562', iconColor: '#FFFFFF' },
  { id: 'toys', name: 'Toys', iconClass: 'css-cat-toys', bgColor: '#DDEBD5', iconColor: '#24543D' },
  { id: 'grooming', name: 'Grooming Supplies', iconClass: 'css-cat-grooming', bgColor: '#FFD15C', iconColor: '#203D40' },
  { id: 'accessories', name: 'Accessories', iconClass: 'css-cat-accessories', bgColor: '#F59562', iconColor: '#FFFFFF' },
  { id: 'vet-services', name: 'Vet Services', iconClass: 'css-cat-vetservices', bgColor: '#24543D', iconColor: '#FFFFFF' }
];

export const VET_SERVICES = [
  { id: 'checkups', name: 'General Checkups', desc: 'Comprehensive wellness exams and developmental checkups.' },
  { id: 'vaccines', name: 'Vaccinations', desc: 'Core rabies, DHPP and feline immunizations on schedule.' },
  { id: 'diagnostics', name: 'Diagnostics & Lab Tests', desc: 'In-house blood chemistry, digital radiology and screenings.' },
  { id: 'surgery', name: 'Surgery', desc: 'Sterile soft-tissue and orthopedic procedures with anesthesia.' },
  { id: 'dental', name: 'Dental Care', desc: 'Ultrasonic scaling, polishing and preventive gum therapies.' },
  { id: 'emergency', name: 'Emergency Care', desc: 'Rapid assessment and acute critical support for pets in need.' }
];

export const TRUST_BENEFITS = [
  {
    title: 'Premium Products',
    desc: 'Top quality, trusted brands',
    type: 'shield'
  },
  {
    title: 'Expert Vets',
    desc: 'Experienced & compassionate',
    type: 'vet'
  },
  {
    title: 'Fast & Reliable Delivery',
    desc: 'Across Nepal',
    type: 'delivery'
  },
  {
    title: 'Pet Wellness Plans',
    desc: 'For a healthier future',
    type: 'wellness'
  }
];

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  badge?: string;
  description: string;
  petType?: 'Dog' | 'Cat' | 'Both';
  inStock?: boolean;
  featured?: boolean;
  createdAt?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CategoryItem {
  id: string;
  name: string;
  iconClass: string;
  bgColor: string;
  iconColor: string;
}

export interface AppointmentData {
  ownerName: string;
  phone: string;
  petName: string;
  petType: 'Dog' | 'Cat' | 'Other';
  service: string;
  preferredDate: string;
  notes?: string;
}

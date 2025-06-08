
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  salePrice?: number;
  images: string[];
  category: string;
  tags: string[];
  rating: number;
  stock: number;
  sizes?: string[];
  colors?: string[];
  featured?: boolean;
  newArrival?: boolean;
  bestSeller?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size?: string;
  color?: string;
}

export type Category = 'men' | 'women' | 'accessories' | 'electronics' | 'home_kitchen';

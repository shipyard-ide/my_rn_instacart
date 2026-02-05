export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  unit: string;
  category: string;
  store: string;
  inStock: boolean;
}

export interface Category {
  id: string;
  name: string;
  emoji: string;
  color: string;
}

export interface Store {
  id: string;
  name: string;
  logo: string;
  deliveryTime: string;
  deliveryFee: string;
  rating: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

export interface ProductRating {
  rate: number;
  count: number;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: ProductRating;
}

export interface ProductReview {
  rating: number;
}

export interface ProductPayload {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  thumbnail?: string;
  images?: string[];
  rating: number;
  stock?: number;
  reviews?: ProductReview[];
}

export interface ProductsPayload {
  products: ProductPayload[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type CartAction =
  | { type: "ADD_ITEM"; product: Product }
  | { type: "REMOVE_ITEM"; productId: number }
  | { type: "UPDATE_QUANTITY"; productId: number; quantity: number }
  | { type: "CLEAR_CART" };

export interface Order {
  totalOrderPrice: number;
  paymentMethodType: string;
  shippingPrice: number;
  taxPrice: number;
  createdAt: string;
  isPaid: boolean;

  _id: string;
  shippingAddress: ShippingAddress;
  cartItems: CartItems[];
}

export interface ShippingAddress {
  details: string;
  phone: string;
  city: string;
}

export interface CartItems {
  count: number;
  product: Product;
  price: number;
}

export interface Product {
  title: string;
  imageCover: string;
}

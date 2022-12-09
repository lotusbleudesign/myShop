export interface Product {
  id: string;
  name: string;
  specifications: {
    color: string;
    weight: string;
    storage: string;
    price: number;
  },
  picture: string;
}

export interface CartProduct {
  counter: number;
  product: Product;
  price: number;
}

export type MapOfCartProduct = { [key: string]: CartProduct }
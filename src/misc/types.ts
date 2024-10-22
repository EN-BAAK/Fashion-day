export type SliderStateType = {
  value: number;
  length: number;
};

export type ProductCardType = {
  id: string;
  img: string;
  name: string;
  text: string;
  type: string;
  size: string[];
  color: string[];
  gender: "male" | "female";
  price: number;
};

export type ProductsStateType = {
  filteredProducts: ProductCardType[];
  singleProduct: ProductCardType[];
  error: boolean;
};

export type CardStateType = {
  cart: ProductCardType[];
  amount: number;
  totalAmount: number;
  totalPrice: number;
};

export type LoginType = {
  name: string;
  password: string;
  image: string;
};

export type AuthStateType = {
  user: LoginType & {
    authUser: boolean;
  };
};

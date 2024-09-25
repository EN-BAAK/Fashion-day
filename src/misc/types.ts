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
};

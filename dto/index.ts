export type Category =
  | "men's clothing"
  | "jewelery"
  | "electronics"
  | "women's clothing";

export interface Product {
  id: number;
  title: string;
  description: string;
  category: Category;
  image: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
}

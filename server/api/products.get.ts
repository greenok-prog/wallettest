import { Product } from "~/dto";

export default defineEventHandler(async (event) => {
  const products: Product[] = await $fetch(
    "https://fakestoreapi.com/products/"
  );
  return products;
});

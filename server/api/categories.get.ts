import { Category } from "~/dto";

export default defineEventHandler(async (event) => {
  const categories: Category[] = await $fetch(
    "https://fakestoreapi.com/products/categories"
  );

  return categories;
});

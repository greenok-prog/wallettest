<template>
  <div class="container"> <v-app>
      <div v-if="categories" class="category-select">
        <v-select v-model="selectedCategory" label="Категория"
          :items="categories"></v-select>
      </div>
      <ProductList v-if="sortedProducts" :products="sortedProducts" />
    </v-app>
  </div>
</template>

<script lang="ts" setup>
import type { Category, Product } from './dto';

const { data: categories } = await useFetch<Category[]>('/api/categories')
const { data: products } = await useFetch<Product[]>('/api/products')

const selectedCategory = ref<Category | null>(null)

const sortedProducts = computed(() => {
  if (products.value && selectedCategory.value) {
    return products.value.filter(el => el.category === selectedCategory.value)
  } else {
    return products.value
  }
})

</script>

<style lang="css">
.category-select {
  width: 200px;
  height: 50px;
}


.product-list {
  margin-top: 20px;
}

.product-list img {
  width: 100px;
  height: 50px;
  object-fit: contain
}

.description {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  max-width: 400px;
}

.container {
  max-width: 1440px;
  padding: 1rem 3rem;
  margin: auto;
}
</style>

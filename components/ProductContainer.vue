<script setup lang="ts">
/*
* - Fetch data at the page level or in a higher-level component.
* - Pass this data down to child components as props.
* - Use a state management solution like Pinia for global state when necessary.
*/

import { useProducts } from '@/composables/useProducts'
import { products, MESSAGE, productsOptions } from '@/data/products';

const { filteredProducts, updateSearchTerm, updateOptions } = useProducts(products)
</script>

<template>
    <div class="flex flex-col gap-4">
        <h2 class="text-4xl font-semibold">Product Shop</h2>
        <div class="flex gap-4">
            <ProductSearch @update:search="updateSearchTerm" :placeholder="MESSAGE.SEARCH_PLACEHOLDER" />
            <ProductOptions @update:options="updateOptions" :options="productsOptions"/>
        </div>
        <ProductList :products="filteredProducts" :message="MESSAGE.NO_PRODUCTS_FOUND" />
    </div>
</template>

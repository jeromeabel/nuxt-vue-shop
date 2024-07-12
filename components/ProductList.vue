<script setup lang="ts">
import { type Product, NO_PROJECT_MESSAGE } from '~/data/products';
import ProductListItem from './ProductListItem.vue';

defineProps<{ products: Product[] }>()
</script>

<template>
    <div v-if="products.length > 0">
        <ProductListItem v-for="product in products" :product="product" data-test="product-item" />
    </div>
    <div v-else>
        <p>{{ NO_PROJECT_MESSAGE }}</p>
    </div>
</template>

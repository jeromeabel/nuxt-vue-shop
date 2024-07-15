<script setup lang="ts">
import { type Product } from '~/data/products';
import ProductListItem from './ProductListItem.vue';

defineProps<{ products: Product[], message?: string }>()
</script>

<template>
    <div v-if="products.length > 0" class="grid grid-cols-3 gap-4">
        <ProductListItem v-for="product in products" :product="product" data-test="product-item" />
    </div>
    <div v-else>
        <p>{{ message || "No projects" }}</p>
    </div>
</template>

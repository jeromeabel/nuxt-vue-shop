<script setup lang="ts">
import type { Product } from '~/data/products';
import ProductListItem from './ProductListItem.vue';

defineProps<{ products: Product[] }>()
</script>

<template>
    <div>
        <ProductListItem v-for="product in products" :product="product" data-test="product-item" />
    </div>
</template>

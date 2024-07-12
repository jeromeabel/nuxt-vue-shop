<script setup lang="ts">
import { type Product } from '@/data/products';
defineProps<{ product: Product }>()
</script>

<template>
    <div>
        <h2>{{ product.name }}</h2>
        <p>{{ product.price }}</p>
        <a :href="`/product/${product.id}`">{{ product.id }}</a>
    </div>
</template>
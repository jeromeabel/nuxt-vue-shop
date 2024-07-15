<script setup lang="ts">
import { type Product } from '@/data/products';
defineProps<{ product: Product }>()
</script>

<template>
    <div class="rounded p-8 border">
        <h3>{{ product.name }}</h3>
        <p>{{ product.price }}$</p>
        <a :href="`/product/${product.id}`" class="underline">Link</a>
    </div>
</template>
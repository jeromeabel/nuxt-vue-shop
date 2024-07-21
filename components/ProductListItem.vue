<script setup lang="ts">
import { type Product } from '@/data/products';
defineProps<{ product: Product }>()
</script>

<template>
    <div class="rounded p-8 border flex flex-col gap-4">
        <div class="flex justify-between">
            <h3> <a :href="`/product/${product.id}`" class="underline">{{ product.name }}</a></h3>
            <p class="font-semibold">{{ product.price }}$</p>
        </div>
        <div class="flex gap-1">
            <span v-for="opt in product.options" :key="opt" class="px-2 border rounded-2xl">{{ opt }}</span>
        </div>
    </div>
</template>
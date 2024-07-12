<script lang="ts" setup>
import { SEARCH_PRODUCT_MESSAGE } from '@/data/products';
const emit = defineEmits(['update:search'])

const handleInput = (event: Event) => {
  const input = (event.target as HTMLInputElement).value;
  emit('update:search', input);
};
</script>

<template>
  <div>
    <input @input="handleInput" type="text" :placeholder="SEARCH_PRODUCT_MESSAGE" />
  </div>
</template>

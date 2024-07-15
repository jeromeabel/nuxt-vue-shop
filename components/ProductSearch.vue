<script lang="ts" setup>
const emit = defineEmits(['update:search'])
defineProps<{ placeholder?: string }>()

const handleInput = (event: Event) => {
  const input = (event.target as HTMLInputElement).value;
  emit('update:search', input);
};
</script>

<template>
  <div class="border-b py-8">
    <input class="border py-2 px-4" @input="handleInput" type="text" :placeholder="placeholder" />
  </div>
</template>

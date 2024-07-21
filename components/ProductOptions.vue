
<script lang="ts" setup>
import { ref, watch } from 'vue'

// Define props
const props = defineProps<{ options: string[] }>()

// Define emits
const emit = defineEmits(['update:options'])

// Selected values
const selectedValues = ref<string[]>([])

// Dropdown open state
const dropdownOpen = ref(false)

// Toggle dropdown visibility
const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}

// Toggle selection of an option
const toggleSelection = (option: string) => {
  const index = selectedValues.value.indexOf(option)
  if (index > -1) {
    //selectedValues.value.splice(index, 1)
    selectedValues.value = selectedValues.value.filter(i => i !== option);
  } else {
    //selectedValues.value.push(option)
    selectedValues.value = [...selectedValues.value, option];
  }
}

// Emit selection changes
const emitSelection = () => {
  emit('update:options', selectedValues.value)
}

watch(selectedValues, emitSelection)
</script>

<template>
  <div class="relative">
    <div @click="toggleDropdown" class="border border-gray-300 p-2 rounded cursor-pointer flex">
      <span >Select options</span>
      <div v-if="selectedValues.length > 0" class="border-s ms-4 ps-4 flex gap-2">
        <div v-for="(value, index) in selectedValues" :key="index" class="flex  items-center border text-sm px-2 py-1 rounded mr-1" @click.stop="toggleSelection(value)">
          {{ value }}
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 cursor-pointer text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
        </div>
      </div>
      <svg class="w-5 h-5 inline ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </div>
    <div v-if="dropdownOpen" class="absolute mt-1 border border-gray-300 bg-white rounded shadow-lg z-10">
        <div v-for="(option, index) in options" 
          :key="index" 
          @click.stop="toggleSelection(option)" 
          class="px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center">
        <input type="checkbox" 
              checked 
              :id="`${option}-checkbox`"  
              :value="option" 
              v-model="selectedValues" 
              class="size-4 mr-2 accent-black">
        {{ option }}
      </div>
    </div>
  </div>
</template>





<!--<template>
  <div>
    <select multiple v-model="selectedOptions" @change="emitSelection">
        <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
      </select>

      <div v-for="option in options" :key="option">
        <input type="checkbox" :value="option" v-model="selectedOptions" @change="emitSelection">
        <label>{{ option }}</label>
      </div>
  </div>
</template>-->


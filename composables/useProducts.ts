import type { Product } from "~/data/products";

export const useProducts = (initialProducts: Product[]) => {

    const products = ref(initialProducts)
    const searchTerm = ref('')
    const options = ref<string[]>([])

    const updateSearchTerm = (newTerm: string) => searchTerm.value = newTerm
    const updateOptions = (newOptions: string[]) => options.value = [...newOptions]

    const filteredProducts = computed(() => {
        let filtered = products.value
        if(searchTerm.value) {
            filtered = products.value.filter(product => product.name.toLowerCase().includes(searchTerm.value.toLowerCase()))
        }
        if(options.value.length > 0) {
            filtered = filtered.filter(product => product.options.some(option => options.value.includes(option)))
        }
        return filtered;
        }
    );
      
    return {
        filteredProducts,
        searchTerm,
        updateOptions,
        updateSearchTerm,
    }
}
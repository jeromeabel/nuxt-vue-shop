import type { Product } from "~/data/products";

export const useProducts = (initialProducts: Product[]) => {

    const products = ref(initialProducts)
    const searchTerm = ref('')

    const updateSearchTerm = (newTerm: string) => searchTerm.value = newTerm

    const filteredProducts = computed(() => {
        let filtered = products.value
        if(searchTerm.value) {
            filtered = products.value.filter(product => product.name.toLowerCase().includes(searchTerm.value.toLowerCase()))
        }
        return filtered;
        }
    );
      
    return {
        filteredProducts,
        searchTerm,
        updateSearchTerm,
    }
}
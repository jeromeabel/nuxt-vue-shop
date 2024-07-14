import type { Product } from "~/data/products";


export const useProducts = (initialProducts: Product[]) => {

    const products = ref<Product[]>(initialProducts)
    const searchTerm = ref<string>('')

    const updateSearchTerm = (search: string) => searchTerm.value = search

    const filteredProducts = computed(() => 
            products.value.filter(product => 
                    product.name.toLowerCase().includes(searchTerm.value.toLowerCase()
            )
        )
    );
      
      return {
        filteredProducts,
        updateSearchTerm,
    }
}
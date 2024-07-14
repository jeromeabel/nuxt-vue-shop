
import { describe, it, expect } from 'vitest';
import { useProducts } from '@/composables/useProducts';
import { type Product } from "@/data/products";

describe("useProducts", () => {

    it("Should return the correct number of filtered projects based on name and description in lowercase", () => {

        const products : Product[] = [
            { id: 1, name: "SUN GLASS", price: 10 },
            { id: 2, name: "sun flower", price: 10 },
            { id: 3, name: "Bag", price: 10 }
        ]
        const { filteredProducts, updateSearchTerm } = useProducts(products);

        // Ensure all projects are included at startup
        expect(filteredProducts.value.length).toEqual(products.length);

        // Should filter to only include products with 'sun' or 'bag' in name
        updateSearchTerm('sun');
        expect(filteredProducts.value.length).toEqual(2);

        updateSearchTerm('bag');
        expect(filteredProducts.value.length).toEqual(1);
    });

})
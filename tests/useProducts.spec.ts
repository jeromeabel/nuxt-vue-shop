
import { describe, it, expect } from 'vitest';
import { useProducts } from '@/composables/useProducts';
import { type Product } from "@/data/products";

describe("useProducts", () => {

    it("Should return the correct number of filtered projects based on name and description in lowercase", () => {

        const products : Product[] = [
            { id: 1, name: "SUN GLASS", price: 10 } as Product,
            { id: 2, name: "sun flower", price: 10 } as Product,
            { id: 3, name: "Bag", price: 10 } as Product
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

    it("Should filter the products based on options", () => {
        const products : Product[] = [
            { id: 1, name: "Glass A", price: 10, options: ["metal", "white"] },
            { id: 2, name: "Glass B", price: 20, options: ["plastic", "white"] },
            { id: 3, name: "Glass C", price: 30, options: ["plastic", "green"] } 
        ]

        const { filteredProducts, updateOptions } = useProducts(products);
        
        expect(filteredProducts.value.length).toEqual(products.length);

        updateOptions(["plastic"])
        expect(filteredProducts.value.length).toEqual(2);
        expect(filteredProducts.value).toEqual( [
            { id: 2, name: "Glass B", price: 20, options: ["plastic", "white"] },
            { id: 3, name: "Glass C", price: 30, options: ["plastic", "green"] } 
        ]);


        updateOptions(["metal"])
        expect(filteredProducts.value.length).toEqual(1);
        expect(filteredProducts.value).toEqual( [
            { id: 1, name: "Glass A", price: 10, options: ["metal", "white"] }
        ]);


        updateOptions(["metal", "plastic"])
        expect(filteredProducts.value.length).toEqual(3);
    })

})
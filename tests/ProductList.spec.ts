import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils'
import { type Product } from '@/data/products';
import ProductList from '@/components/ProductList.vue';
describe('ProductList', () => {

    it("Should render the correct number of products", () => {
        const products : Product[] = [
            { id: 1, name: "PRODUCT1", price: 10 },
            { id: 2, name: "PRODUCT2", price: 10 },
            { id: 3, name: "PRODUCT3", price: 10 }
        ]
        const wrapper = mount(ProductList, { props: { products }})
        const items = wrapper.findAll('[data-test="product-item"]')
        expect(items.length).toBe(products.length)
    })
})


import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils'
import { type Product } from '@/data/products';
import ProductListItem from '@/components/ProductListItem.vue';
describe('ProductListItem', () => {

    it("Should render product details", () => {
        const product : Product = { id: 1, name: "PRODUCT", price: 100 }
        const wrapper = mount(ProductListItem, { props: { product }})
        expect(wrapper.text()).toContain("PRODUCT")
        expect(wrapper.text()).toContain("100")
        expect(wrapper.find('a').attributes('href')).toBe('/product/1');
    })
})
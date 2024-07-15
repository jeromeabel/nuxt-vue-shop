
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils'
import ProductSearch from '@/components/ProductSearch.vue';

describe('ProductSearch', () => {

    it('Should render the input element', async () => {
        const wrapper = await mount(ProductSearch, { props: { placeholder: "PLACEHOLDER" } });
        const input = wrapper.find('input[type="text"]');

        expect(input.exists()).toBe(true);
        expect(input.attributes('placeholder')).toBe("PLACEHOLDER");
      });


    it("Should emit the search term when input changes", async () => {
        const wrapper = await mount(ProductSearch);
        const input = wrapper.find('input[type="text"]');

        await input.setValue('sunglass');

        expect(wrapper.emitted('update:search')).toHaveLength(1);
        expect(wrapper.emitted('update:search')![0]).toEqual(['sunglass']);
    })
})
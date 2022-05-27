import { mount } from "@vue/test-utils";
import Home from './HomeComp.vue';

describe('In Home Component', () => {
    let wrapper;

    beforeAll(() => {

        wrapper = mount(Home);
    });

    afterAll(() => {
        wrapper.unmount();
    });

    it('Is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy();
    });

    it('It should render the correct markup', () => {
        expect(wrapper.html()).toContain('<div class="search-content">');
    });

    it('Has a button which is Search', () => {
        expect(wrapper.find('button').exists()).toBe(true)
    });
});
import { mount } from "@vue/test-utils";
import Header from './HeaderComp.vue';

describe('In Header Component', () => {
    let wrapper;

    beforeAll(() => {

        wrapper = mount(Header);
    });

    afterAll(() => {
        wrapper.unmount();
    });

    it('Is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy();
    });

    it('Has a button which is Search', () => {
        expect(wrapper.find('button').exists()).toBe(true)
    });
});
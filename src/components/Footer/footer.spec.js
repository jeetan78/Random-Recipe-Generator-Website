import { mount } from "@vue/test-utils";
import Footer from './FooterComp.vue';

describe('In Footer Component', () => {
    let wrapper;

    beforeAll(() => {

        wrapper = mount(Footer);
    });

    afterAll(() => {
        wrapper.unmount();
    });

    it('Is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy();
    });
});
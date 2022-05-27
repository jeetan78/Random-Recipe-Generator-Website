import { mount } from "@vue/test-utils";
import NotFound from './NotFoundComp.vue';

describe('In NotFound Component', () => {
    let wrapper;

    beforeAll(() => {

        wrapper = mount(NotFound);
    });

    afterAll(() => {
        wrapper.unmount();
    });

    it('Is a Vue instance', () => {
        expect(wrapper.vm).toBeTruthy();
    });

    it('It should render the correct markup', () => {
        expect(wrapper.html()).toContain('<div id="not-found">');
    });

});
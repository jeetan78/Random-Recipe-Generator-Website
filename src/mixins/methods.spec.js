import { mount, flushPromises } from '@vue/test-utils';
import Methods from './methods.js';
import axios from 'axios'

describe('Methods', () => {

    let wrapper;

    // Fake component so that we can mount the mixin in it and test the mixin code.
    const mockComponent = {
        template: `<div class="mock">
                    <button id="button1" @click="goToSearchResults">Click</button>
                    <button id="button2" @click="getRecipe">Click</button>
                    <button id="button3" @click="getRecipeList">Click</button>
                    </div>`,
    };

    beforeAll(() => {
        wrapper = mount(mockComponent, {
            data(){
                return{
                    api:'https://www.themealdb.com/api/json/v1/1/search.php?s=dal',
                }
            },
            mixins: [Methods],
        });
    });

    it('should be defined', () => {
        expect(wrapper.vm).toBeDefined();
    });

    const spyGoToSearchResults = jest.spyOn(Methods.methods, 'goToSearchResults');
    it('describe what it should do', () => {
        wrapper.find('#button1').trigger("click");
        expect(spyGoToSearchResults).toHaveBeenCalled();
    });

    const spyGetRecipe = jest.spyOn(Methods.methods, 'getRecipe');
    it('describe what it should do', () => {
        wrapper.find('#button2').trigger("click");
        expect(spyGetRecipe).toHaveBeenCalled();
    });

    const spyGetRecipeList = jest.spyOn(Methods.methods, 'getRecipeList');
    it('describe what it should do', () => {
        wrapper.find('#button3').trigger("click");
        expect(spyGetRecipeList).toHaveBeenCalled();
    });


    const mockRecipeList = [
        { idMeal: 52785, strMeal: 'Dal fry' },
    ]

    jest.spyOn(axios, 'get').mockResolvedValue(mockRecipeList);

    test('loads recipes on button click',async()=>{
        await wrapper.find('#button3').trigger('click');

        expect(axios.get).toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/search.php?s=dal');

         await flushPromises();

    })

});
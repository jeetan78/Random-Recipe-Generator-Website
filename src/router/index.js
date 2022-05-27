import {createRouter, createWebHistory} from 'vue-router';
import HomeComp from '../components/Home/HomeComp'
import RandomMealComp from '../components/Recipe/RandomMealComp'
import SearchComp from '../components/Search/SearchComp'
import RecipeComp from '../components/Recipe/RecipeComp'
import CategoryComp from '../components/Category/CategoryComp'
import NotFoundComp from '../components/NotFound/NotFoundComp'

const routes=[
    {
        path: '/',
        name: 'Home',
        component:HomeComp,
    },
    {
        path: '/random',
        name: 'RandomMeal',
        component:RandomMealComp,
    },
    {
        path: '/search/:recipeName',
        name: 'Search',
        component:SearchComp,
    },
    {
        path: '/recipe/:recipeId',
        name: 'Recipe',
        component:RecipeComp,
    },
    {
        path: '/category/:categoryName',
        name: 'Category',
        component:CategoryComp,
    },
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component:NotFoundComp,
    },
    
];

const router=createRouter({
    history:createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior () {
        return { top: 0 }
    }
})

export default router
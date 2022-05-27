<template>
    <div>
        <div class="d-flex justify-content-center bg-dark p-2">
            <button @click="getRecipe()" class="btn btn-danger recipe-button">
                <i class='fas fa-pizza-slice'></i> Try Another Recipe
            </button>
        </div>
        
        <h1 class="loading text-center bg-dark text-light mt-0 pt-4" v-if="loading">Loading...</h1>

        <div v-else class="container-fluid bg-dark text-light p-2">
            <h1 class="text-center"><b>{{meal.strMeal}}</b></h1>
            <hr>
            <div class="row justify-content-center">
                    <img class="img recipe-img w-25 p-1 bg-dark" :src="mealImage" alt="{{meal.strMeal}}" style="border:1px solid; border-radius: 5px;"/>
            </div>
            <div class="row justify-content-center text-center m-2">
                    <p style="color:grey"><b>Cuisine:</b> {{meal.strArea}}
                    <br> 
                    <b>Category :</b> {{meal.strCategory}}</p>
                    <p style="color:grey" v-if="meal.strTags!=null"><i>Tags:-{{meal.strTags}}</i></p>
            </div>
            <hr>

            <div class="row justify-content-center text-center m-2">
                <h3 class="text-center"><i><u>Ingredients</u></i></h3> 
                <div class="ingredients col-sm-auto m-2" v-for="ingredient in ingredients" :key="ingredient.id">
                    <img class="ingredient-img py-3" :src="ingredient.image" />
                    <p>{{ ingredient.measure }} {{ ingredient.name }}</p>
                </div>
            </div>
            <hr>

            <div class="row m-2">
                <div class="col-md-6">
                    <h3 class="text-center"><i><u>Instructions</u></i></h3>
                    <p class="text-justify">{{meal.strInstructions}}</p>
                </div>
                <div class=" col-md-6 ">
                    <h3 class="text-center"><i><u>Video Instructions</u></i></h3>
                    <iframe width="100%" height="400" class="responsive-iframe" :src="'https://www.youtube.com/embed/' + meal.strYoutube.substring(32)"></iframe>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Mixins from '@/mixins/methods'
    export default {
        name:"RandomMealComp",
        data(){
            return{
                api:"https://www.themealdb.com/api/json/v1/1/random.php",
                meal:'',
                ingredientImage:"https://www.themealdb.com/images/ingredients/",
                ingredients:[],
                mealImage:"",
                loading:false,
            }      
        },
        mixins:[Mixins],
        created(){
            this.getRecipe();
        },
    }
</script>

<style scoped>
    .recipe-img{
        transition: .4s ease-in-out;
    }
    .recipe-img:hover{
        transform: scale(1.1);
        
    }
    .ingredient-img {
        height: 100px;
        width: auto;
        transition: .3s ease-in-out;
    }
    .ingredient-img:hover{
        transform: scale(1.2);
    }
    .loading{
        min-height: 580px;
    }
    u{
        text-decoration-color: #ff4444;
    }
    .btn:hover{
        transition: .2s ease-in-out;
        transform: scale(1.1);
    }
</style>
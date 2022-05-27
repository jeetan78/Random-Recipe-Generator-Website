<template>
    <div>
        <h1 class="loading text-center bg-dark text-light" v-if="loading">Loading...</h1>
        <div v-else class="container-fluid bg-dark result text-center">
            <div class="row" v-if="!categoryName || !meals">
                <h2>No results found...</h2>
            </div>
            <div class="row justify-content-center align-items-start" v-else>
                <h1 class="display-3 text-light">{{categoryName}}</h1>
                <div class="col-md-3 col-sm-4 m-4" v-for="meal in meals" :key="meal.idMeal">
                    <router-link class="router" :to="{path:`/recipe/${meal.idMeal}`}">
                        <div class="card bg-light">
                            <div class="card-body">
                                    <img class="img-fluid rounded-circle" :src="meal.strMealThumb" alt="{{meal.strMeal}}" height="180" width="200" />
                                <hr>                           
                                    <h3 class="card-title text-danger"><b>{{meal.strMeal}}</b></h3>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Mixins from '@/mixins/methods'
    export default {
        name:"CategoryComp",
        data(){
            return{
                categoryName:this.$route.params.categoryName,
                api:"https://www.themealdb.com/api/json/v1/1/filter.php?c="+this.$route.params.categoryName,
                loading:false,
                meals:[],
            }
        },
        mixins:[Mixins],
        created(){
            this.getRecipeList();
        },
    }
</script>

<style scoped>
    .card{
        min-height: 350px;
        width: 100%;
        border-radius: 15px;
        transition: .3s ease-in-out;
    }
    .card:hover{
        transform: scale(1.05);
    }
    .router{
        text-decoration: none;
        color: rgb(23, 57, 107);
    }
    .result{
        min-height: 580px;
    }
    .loading{
        min-height: 580px;
    }
    .card hr{
        width: 60%;
        height: 3px;
        margin: auto;
        margin-top: 15px;
    }

    @media (max-width: 575px) {
        .card{
            min-height: 300px;
            width: 80%;
            border-radius: 15px;
            transition: .3s ease-in-out;
            margin: auto;
        }
        .card:hover{
            transform: scale(1.05);
        }
        .router{
            text-decoration: none;
            color: rgb(23, 57, 107);
        }
        .result{
            min-height: 580px;
        }
        .loading{
            min-height: 580px;
        }
        .card hr{
            width: 60%;
            height: 3px;
            margin: auto;
            margin-top: 15px;
        }
    }
</style>
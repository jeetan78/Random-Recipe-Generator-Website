<template>
    <div>
        <div class="container-fluid bg-dark ">
            <div class="row">
                <div class="random-content text-center justify-content-center align-items-center">
                    <p class="lead bg-light" style="font-size:50px">Can't decide what to cook?</p>
                    <p style="font-size:25px">Go for a random meal recipe...</p>
                    
                    <router-link class="btn btn-danger btn-lg mt-2" to="/random" style="font-size:20px">
                        <i class='fas fa-pizza-slice'></i>  Random Recipe 
                    </router-link>
                </div>
            </div>
            <div class="row text-center">
                <div class="search-content">
                    <h2>Search for recipes from all around the world...</h2>
                    <input type="text" class="form-control search-bar m-4" 
                        v-model.trim="recipeName" placeholder="Search for a recipe..." 
                        @keyup.enter="goToSearchResults">
                    <button @click="goToSearchResults" class="btn btn-light btn-lg text-danger border-danger" type="button">
                        <i class='fas fa-pizza-slice'></i>  Search 
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Mixins from '../../mixins/methods'
    export default {
        name:"HomeComp",
        data(){
            return{
                recipeName:"",
            }
        },
        mixins:[Mixins],
    }
</script>

<style scoped>
    .random-content{
        min-height: 200px;
        background-image: url(@/assets/background.jpg);
        background-size: cover ;
        background-repeat: no-repeat ;
        background-position:center center;
        padding: 260px 0px;
    }
    
    .search-content{
        background-color: whitesmoke;
        padding: 60px 60px;
    }

    .search-bar{
        height: 40px;
        border: 1px solid;
        border-radius: 10px;
    }
    .btn{
        transition: .3s ease-in-out;
    }
    .btn:hover{
        transform: scale(1.1);
    }
</style>
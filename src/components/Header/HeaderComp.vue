<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark ">
            <div class="container-fluid p-3">
                <router-link  to="/">
                    <img class="p-2 mx-2 navbar-brand" src="@/assets/hirecipe.png" height="70" alt="logo"/>
                </router-link>
                
                <div class="search-bar-sm d-none d-sm-block d-md-none">
                    <div class="d-flex">
                        <input class="form-control search-bar" v-model.trim="recipeName" ref="name1"
                            type="search" placeholder="Search for recipes..." @keyup.enter="reset('name1');goToSearchResults()">
                        <button @click="reset('name1');goToSearchResults();" class="btn btn-danger" type="button">
                            <i class="bi bi-search"></i>
                        </button>
                    </div>
                </div>

                <button class="navbar-toggler ms-auto mx-2" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navmenu" 
                    aria-controls="navmenu"
                    aria-expanded="false">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse bg-dark" id="navmenu">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item d-block d-sm-none search-bar-xs">
                            <div class="d-flex">
                                <input class="form-control search-bar" v-model.trim="recipeName" ref="name1"
                                    type="search" placeholder="Search for recipes..." @keyup.enter="reset('name1');goToSearchResults()">
                                <button @click="reset('name1');goToSearchResults();" class="btn btn-danger" type="button">
                                    <i class="bi bi-search"></i>
                                </button>
                            </div>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link " to="/"><h4>Home</h4></router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link " to="/random"><h4>Random Recipe</h4></router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Categories
                            </a>
                            <div class="dropdown-menu d-menu bg-dark" aria-labelledby="navbarDropdown">
                                <router-link class="dropdown-item d-item" :to="{path:`/category/Breakfast`}">Breakfast</router-link>
                                <router-link class="dropdown-item d-item" :to="{path:`/category/Starter`}">Starter</router-link>
                                <router-link class="dropdown-item d-item" :to="{path:`/category/Vegetarian`}">Vegetarian</router-link>
                                <router-link class="dropdown-item d-item" :to="{path:`/category/Seafood`}">Seafood</router-link>
                                <router-link class="dropdown-item d-item" :to="{path:`/category/Dessert`}">Dessert</router-link>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="search-block d-none d-md-block ">
                    <div class="d-flex">
                        <input class="form-control search-bar" v-model.trim="recipeName" ref="name"
                        type="search" placeholder="Search for recipes..." @keyup.enter="reset('name');goToSearchResults()">
                        <button @click="reset('name');goToSearchResults();" type="button" class="search-button btn btn-danger">
                            <i class="bi bi-search"></i>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
import Mixins from '@/mixins/methods'
    export default {
        name:"HeaderComp",
        data(){
            return{
                recipeName:""
            }
        },
        mixins:[Mixins],
        methods:{
            reset(field){
                this.$refs[field].value = "";
            },
        }
    }
</script>

<style scoped>
    .navbar{
        border-radius: 0px;
        height: 75px;
        border: 0px;
    }
    .navbar-toggler{
        height: 40px;
        font-size: 20px;
    }
    .nav-item{
        padding-left: 10px;
    }
    .search-block{
        width: 35%;
    }
    .search-bar-sm{
        width: 70%;
    }
    ul li{
        font-size: 18px;
    }
    .dropdown{
        padding-top: 9px;
    }
    .d-item{
        background-color: transparent;
        color: rgb(164, 163, 163);
        font-size: 15px;
    }
    .search-bar-xs{
        margin-right: 10px;
    }
</style>
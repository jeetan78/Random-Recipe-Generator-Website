import axios from 'axios';
export default {
    methods: {
        goToSearchResults() {
            if (this.recipeName) {
                let name = this.recipeName;
                this.$router.push({ name: 'Search', params: { recipeName: name } });
                this.recipeName = "";
            }
        },

        getRecipe() {
            this.loading = true;
            axios.get(this.api)
                .then(response => {
                    console.log(response);
                    this.meal = response.data.meals[0];
                    console.log(this.meal.strMeal);
                    this.mealImage = this.meal.strMealThumb;
                    this.loading = false;

                    this.ingredients = [];
                    for (let i = 0; i < 20; i++) {
                        let num = i + 1;
                        let ingredientName = this.meal[`strIngredient${num}`];
                        let amount = this.meal[`strMeasure${num}`];
                        if (ingredientName) {
                            let img = this.ingredientImage + ingredientName + '.png';
                            const item = {
                                id: num,
                                name: ingredientName,
                                measure: amount,
                                image: img
                            }
                            this.ingredients.push(item)
                        }
                    }
                    console.log(this.ingredients);
                }).catch(err => {
                    console.log("Error Occured", err);
                })
        },

        getRecipeList() {
            this.loading = true;
            axios.get(this.api)
                .then(response => {
                    console.log(response);
                    this.meals = response.data.meals;
                    this.loading = false;
                }).catch(err => {
                    console.log("Error Occured", err);
                })
        }
    }
}
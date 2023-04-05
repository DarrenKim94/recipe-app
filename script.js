const newRecipebtn = document.getElementsByClassName('newRecipe');
const mealContainer = document.getElementById('randomRecipe');
const recipeName = document.getElementById('recipeName');
const recipeImage = document.getElementById('recipeImage');
const recipeIngredients = document.getElementById('ingredientList');
const recipeInstructions = document.getElementById('stepList');
const recipeVideo = document.getElementById('recipeVideo');
const recipeArray = [recipeImage, recipeName, recipeIngredients, recipeVideo, recipeInstructions]

function showRandomRecipe() {
	axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(response => {
            console.log(response.data.meals[0])
        })
}

function clearRecipe() {
    recipeArray.forEach(element => {
        element.innerHTML= '';
    });
}
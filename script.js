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
            let recipe = response.data.meals[0];
            recipeName.innerHTML = recipe.strMeal;
            recipeInstructions.innerHTML = recipe.strInstructions;
            recipeImage.innerHTML =`<img src="${recipe.strMealThumb}" alt="recipe image">`;
        })
}

function clearRecipe() {
    recipeArray.forEach(element => {
        element.innerHTML= '';
    });
}

function createImage() {
    let recipe = response.data.meals[0];
    image = document.createElement('img');
    image.innerHTML = `<img src="${recipe.strMealThumb}" alt="Recipe Image">`
}


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

            recipeVideo.innerHTML = `<iframe width='640' height='390' src='https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}' allowFullScreen></iframe>`
        })
}

function clearRecipe() {
    recipeArray.forEach(element => {
        element.innerHTML= '';
    });
}



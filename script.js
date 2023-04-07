const newRecipebtn = document.getElementsByClassName('newRecipe');
const mealContainer = document.getElementById('randomRecipe');
const recipeName = document.getElementById('recipeName');
const recipeImage = document.getElementById('recipeImage');
const recipeIngredients = document.getElementById('ingredientList');
const recipeInstructions = document.getElementById('stepList');
const recipeVideo = document.getElementById('recipeVideo');
const button = document.getElementById('button');
const recipeArray = [recipeImage, recipeName, recipeIngredients, recipeVideo, recipeInstructions];
let listOfIngredients = [];

function showRandomRecipe() {
	axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
        .then(response => {
            let recipe = response.data.meals[0];
            recipeName.innerHTML = recipe.strMeal;

            recipeInstructions.innerHTML = recipe.strInstructions;

            recipeImage.innerHTML =`<img max-width='640' height='390' src="${recipe.strMealThumb}" alt="recipe image">`;

            recipeVideo.innerHTML = `<iframe class="recipeVideo" width='640' height='390' src='https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}' allowFullScreen></iframe>`
            
            for (let i = 1; i < 20; i++) {
                if(recipe[`strIngredient${i}`]) {
                    listOfIngredients.push(recipe[`strMeasure${i}`] + ' ' + recipe[`strIngredient${i}`])
                }
            }

            listOfIngredients.forEach(ingredient => {
                const li = document.createElement('li');
                recipeIngredients.append(li);
                li.innerHTML = ingredient;
            });

        })
}

function clearRecipe() {
    recipeArray.forEach(element => {
        element.innerHTML= '';
    });
}

function changeRecipe() {
    clearRecipe();
    showRandomRecipe();
}

window.onload = () => {
	showRandomRecipe();
}

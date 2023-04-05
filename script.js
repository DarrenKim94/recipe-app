const newRecipebtn = document.getElementsByClassName('newRecipe');
const mealContainer = document.getElementById('randomRecipe');

function newRecipe() {
    axios.get('http://www.themealdb.com/api/json/v1/1/random.php')
        .then(response => {
            
        })
}
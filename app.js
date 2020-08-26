//init food object
const food = new Food;


//init UI object

const ui = new UI;

//get value of what is typed in ui bar 

const userText = document.getElementById('foodForm')

userText.addEventListener('keyup',(e) => {
    const foodText = e.target.value;

    food.getfood(foodText).then(fooddata => {
        fooddata.meals.forEach(element => {
            ui.showfood(element.strMeal)
        })
        
    console.log(fooddata)});


})


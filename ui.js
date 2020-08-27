class UI{
    constructor(){
        this.foodProfile = document.getElementById('foodprofile')
    }
    //show food on ui
    showfood(food){

             this.foodProfile.innerHTML = `<div class="card card-body mb-3">
            <div>
                <h3 class="text-center">${food.strMeal}</h3>
            </div>
                <div class="col-md-3">
                <span class="badge badge-primary">Category: ${food.strCategory}</span>
                <span class="badge badge-secondary">Origin: ${food.strArea}</span>
                <br><br><br>
                </div>
                <div>
                <img class="rounded mx-auto d-block" src="${food.strMealThumb}">
                </div>
            </div>`;
    }

    clearFood(){
        this.foodProfile.innerHTML = '';
    }
}
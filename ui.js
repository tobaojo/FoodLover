class UI{
    constructor(){
        this.foodProfile = document.getElementById('foodprofile')
    }
    //show food on ui
    showfood(food){
        this.foodProfile.innerHTML = `<div class="card card-body mb-3">
        <div class="row">
                <div class="col-md-3">
                <ul>
                <li>${food}</li>
                </ul>
                </div>
            </div>
        </div>`
    }
}
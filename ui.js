class UI{
    constructor(){
        this.foodProfile = document.getElementById('foodProfile')
    }
    //show food on ui
    showfood(){
        this.foodProfile.innerHTML = `<div class="card card-body mb-3">
        <div class="row">
        
            </div>
        </div>`
    }
}
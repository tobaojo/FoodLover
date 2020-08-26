class Food{
    constructor(){
    
    }

    async getfood(food){

       
        //create response var
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${food}`);

        //put data into json
        const data = await response.json()

        return data;
    }
}
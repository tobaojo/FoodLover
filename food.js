class Food{
    constructor(){
        this.url = 'https://www.themealdb.com/api/json/v1/1/random.php';
    }

    async getfood(){
        //create response var
        const response = await fetch(this.url);

        //put data into json
        const data = await response.json()

        return data;
    }
}
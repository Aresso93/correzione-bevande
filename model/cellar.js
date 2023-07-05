class Cellar{

        constructor(beverageArray = []){
            this.beverageArray = beverageArray;

        }

    get beverageCount(){

        const count = this.beverageArray.length;
        return count;
    }


    getAllBeverages(){

        let allBeveragesString = '';

        //for (const beverage of this.beverageArray) {
        //    
        //    allBeveragesString += beverage.toString();
        //}
        for (let index = 0; index < this.beverageArray.length; index++) {
            const element = this.beverageArray[index];
            const humanIndex = index+1;
            allBeveragesString += humanIndex + ') ' + element.toString();
            allBeveragesString += '--------------------------------------\n';
        }

        return allBeveragesString;

    }


    addBeverage(beverage){

        this.beverageArray.push(beverage);

    }

    removeBeverage(index){

        this.beverageArray.splice(index, 1);

    }

    static fromDbObject(data){

        const tempArray = [];

        for (const genericObject of data) {
            
            if(genericObject.region){

                const wine = new Wine(genericObject.name, genericObject.maker, genericObject.vol, genericObject.type, genericObject.dop, genericObject.region, genericObject.vine);
                tempArray.push(wine);
            } else {

                const beer = new Beer(genericObject.name, genericObject.maker, genericObject.vol, genericObject.type, genericObject.dop, genericObject.malt);
                tempArray.push(beer);
            }
        }

        const newCellar = new Cellar(tempArray);

        return newCellar;
    }

}
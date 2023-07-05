class Beverage{

    constructor(name, maker, vol, type, dop){

        this.name = name;
        this.maker = maker;
        this.vol = vol;
        this.type = type;
        this.dop = dop;
    }

    set dop(value){

        if (value === null) {
            this._dop = new Date();                                       //l'underscore di dop lo rende quella che si dice una funzione protetta. Vuol dire che io ho il controllo di come la deve inserire l'utente
        } else if (value.includes('/')){
            const dopArray = value.split('/');                    
            const year = parseInt(dopArray[2])                    
            const month = parseInt(dopArray[1]) - 1;
            const day = parseInt(dopArray[0]);                   
            this._dop = new Date(year, month, day);
        } else {
            this._dop = new Date(value);
        }

    }

    get dop(){
        return this._dop.toISOString();
    }

    toString(){

        const card = 'Nome: ' + this.name +'\n' +
        'Produttore: ' + this.maker + '\n' + 
        'Gradazione alcolica: ' + this.vol + '% \n'+
        'Tipologia: ' + this.type + '\n' +
        'Data: ' + this.dop + '\n';

        return card;

    }




}
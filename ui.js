class UI{


constructor(){

    const data = Storage.loadData();
    if (data !== null){
        this.cellar = Cellar.fromDbObject(data);
    } else {
        this.cellar = new Cellar();
    }

    this.cellar = new Cellar();


    }

    startApp(){
        while (true) {                                                

            const firstChoice = prompt(                                                      //qui printo il numero di bevande che ho
                                    'Ciao, utente! La nostra cantina ha a disposizione ' + this.cellar.beverageCount + ' bevande\n' +
                                    'Hai 4 opzioni:\n'+
                                    '1) Guarda la lista delle bevande\n' +
                                    '2) Aggiungi una bevanda\n'+
                                    '3) Rimuovi una bevanda\n'+
                                    '4) Esci dal programma\n'+
                                    'Inserisci il numero dell\'operazione');
            if (firstChoice === '1') {
                this.showBeverages();
            } else if (firstChoice === '2') {
                this.insertBeverage();
            } else if (firstChoice === '3') {
                this.deleteBeverage();
            } else if (firstChoice === '4') {
                break;                         
            } else {
                alert('Hai sbagliato, amo');
            }
        
        
                }
    }

    showBeverages(){

        const allBeverages = this.cellar.getAllBeverages();
        alert(allBeverages);

    }



    insertBeverage(){
        const insertChoice = prompt('Vuoi inserire un vino o una birra?');

        if (insertChoice !== 'birra'.toLowerCase() && insertChoice !== 'vino'.toLowerCase()) {
            alert('non puoi inserire altri tipi di bevande');
            return;
            
        }

        const name = prompt('Inserisci il nome');
        const maker = prompt('Inserisci il produttore');
        const vol = prompt('Inserisci la gradazione alcolica');
        const type = prompt('Inserisci il tipo');
        const dop = prompt('Inserisci la data (gg/mm/aaaa)');

        if (insertChoice === 'birra') {
            const malt = prompt('Inserisci il tipo del malto');
            const beer = new Beer(name, maker, vol, type, malt);
            this.cellar.addBeverage(beer);
        } else {
            const region = prompt('Inserisci la regione');
            const vine = prompt('Inserisci il vitigno');
            const wine = new Wine(name, maker, vol, type, dop, region, vine);
            this.cellar.addBeverage(wine);
        }
        Storage.saveData(this.cellar.beverageArray);
    
    }

    deleteBeverage(){
        const humanIndex = prompt ('Inserisci il numero della bevanda da rimuovere');
        const index = humanIndex -1;
        
        this.cellar.removeBeverage(index);

        Storage.saveData(this.cellar.beverageArray);
    }

    

}
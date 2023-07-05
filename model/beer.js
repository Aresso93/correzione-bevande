class Beer extends Beverage{



    constructor(name, maker, vol, type, dop, malt){
    
        super (name, maker, vol, type, dop);
        this.malt = malt;
    
        }
    
        toString(){
    
            return 'Birra: \n' + super.toString() + 
            'Malto: ' + this.malt + '\n';
        }
    
    
    }
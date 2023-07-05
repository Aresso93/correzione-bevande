class Wine extends Beverage{



constructor(name, maker, vol, type, dop, region, vine){

    super (name, maker, vol, type, dop);
    this.region = region;
    this.vine = vine;

    }

    toString(){

        return 'Vino: \n' + super.toString() + 
        'Regione: ' + this.region + '\n' +
        'Vitigno: ' + this.vine + '\n';
    }


}
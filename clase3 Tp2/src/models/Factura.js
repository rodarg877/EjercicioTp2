export default class Factura{
    constructor(codigo, importe, items){
        this.codigo=codigo;
        this.importe= importe;
        this.items=items;
    }

    calculaTotalesDeItems (){
        return this.items.reduce((sum,item)=>sum+item,0);
    }
}
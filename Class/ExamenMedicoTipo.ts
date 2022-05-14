import {RangoDeValores} from "./RangoDeValores"

export class ExamenMedicoTipo{
    
    constructor (private id:string, private unidad:string, public nombre:string, private valoresPermitidos:RangoDeValores) {

    }

    get _id():string{
        return this.id;
    }  
    get _unidad():string{
        return this.unidad;
    }  
    get _valoresPermitidos():RangoDeValores{
        return this.valoresPermitidos;
    }  
    set _id(value:string){
        this.id=value;
    }
    set _unidad(value:string){
        this.unidad=value;
    }
    set _valoresPermitidos(value:RangoDeValores){
        this.valoresPermitidos=value;
    }
}


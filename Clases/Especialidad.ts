import {ExamenMedicoTipo} from "./ExamenMedicoTipo"
export class Especialidad{


    constructor (private id: string,private nombre: string,private examenesRequeridos?:ExamenMedicoTipo[]){

    }
    get _id():string{
        return this.id;
    }  
    get _nombre():string{
        return this.nombre;
    }
    get _examenesRequeridos():ExamenMedicoTipo[]{
        if (this.examenesRequeridos){
            return this.examenesRequeridos;
        }
        else return []
    }
    set _id(value:string){
        this.id=value;
    }
    set _nombre(value:string){
        this.nombre=value;
    }
    set _examenesRequeridos(value:ExamenMedicoTipo[]){
        this.examenesRequeridos=value;
    }
}
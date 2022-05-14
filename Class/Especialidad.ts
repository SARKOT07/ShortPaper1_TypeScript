import {ExamenMedicoTipo} from "./ExamenMedicoTipo"
export class Especialidad{

    private examenesRequeridos:ExamenMedicoTipo[];

    constructor (private id: string,private nombre: string){
        this.examenesRequeridos=[];
    }
    get _id():string{
        return this.id;
    }  
    get _nombre():string{
        return this.nombre;
    }
    get _examenesRequeridos():ExamenMedicoTipo[]{
        return this.examenesRequeridos;
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
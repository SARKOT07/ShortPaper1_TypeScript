
export abstract class Persona{
    constructor (protected id :string,protected Nombre:string,protected Apellido:string){

    }
    abstract modificar():void;
    abstract consultar():void;

}
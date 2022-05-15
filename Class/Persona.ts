
export abstract class Persona{
    constructor (protected id :string,protected Nombre:string,protected Apellido:string){

    }
    abstract modificar(persona:Persona):void;
    abstract consultar(persona:Persona):void;

}
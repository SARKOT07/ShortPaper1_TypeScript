 import { EventoComportamiento } from "../Enumerations/EventoComportamiento";
 import { Persona } from "./Persona";
 
 export class Auditoria {

    constructor (private id: string, private fecha: Date, private comportamiento: EventoComportamiento, private auditoriaDePersona: Persona[]) {
    }
 
    public get _id(): string {
        return this.id;
    }

    public set _id(value: string) {
        this.id = value;
    }

    public get _fecha(): Date {
        return this.fecha;
    }

    public set _fecha(value: Date) {
        this.fecha = value;
    }

    public get _comportamiento(): EventoComportamiento {
        return this.comportamiento;
    }

    public set _comportamiento(value: EventoComportamiento) {
        this.comportamiento = value;
    }

    public get _auditoriaDePersona(): Persona[] {
        return this.auditoriaDePersona;
    }

    public set _auditoriaDePersona(value: Persona[]) {
        this.auditoriaDePersona = value;
    }

    asignarComportamiento (persona: Persona) : void {
        //Se le asigna el tipo de comportamiento que observo la clase ObservadorAuditar    
    }

    verAuditoria (persona: Persona) : void {
        //Se consulta la auditoria que tuvo la persona
    }

    guardar () : void {
        //Se guarda la auditoria    
    }

 }
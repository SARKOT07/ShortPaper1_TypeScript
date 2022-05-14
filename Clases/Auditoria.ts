 import { EventoComportamiento } from "../Enumerations/EventoComportamiento";
 import { Persona } from "./Persona";
 
 export class Auditoria {

    private auditoriaDePersona: Persona[];

    constructor (private id: string, private fecha: Date, private comportamiento: EventoComportamiento, auditoriaDePersona: Persona[]) {
        this.auditoriaDePersona = []
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

    }

    verAuditoria (persona: Persona) : void {

    }

    guardar () : void {

    }

 }
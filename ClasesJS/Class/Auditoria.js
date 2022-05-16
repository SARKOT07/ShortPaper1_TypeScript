"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auditoria = void 0;
class Auditoria {
    constructor(id, fecha, comportamiento, auditoriaDePersona) {
        this.id = id;
        this.fecha = fecha;
        this.comportamiento = comportamiento;
        this.auditoriaDePersona = auditoriaDePersona;
    }
    get _id() {
        return this.id;
    }
    set _id(value) {
        this.id = value;
    }
    get _fecha() {
        return this.fecha;
    }
    set _fecha(value) {
        this.fecha = value;
    }
    get _comportamiento() {
        return this.comportamiento;
    }
    set _comportamiento(value) {
        this.comportamiento = value;
    }
    get _auditoriaDePersona() {
        return this.auditoriaDePersona;
    }
    set _auditoriaDePersona(value) {
        this.auditoriaDePersona = value;
    }
    asignarComportamiento(persona) {
        //Se le asigna el tipo de comportamiento que observo la clase ObservadorAuditar    
    }
    verAuditoria(persona) {
        //Se consulta la auditoria que tuvo la persona
    }
    guardar() {
        //Se guarda la auditoria    
    }
}
exports.Auditoria = Auditoria;

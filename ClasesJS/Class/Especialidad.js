"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Especialidad = void 0;
class Especialidad {
    constructor(id, nombre) {
        this.id = id;
        this.nombre = nombre;
        this.examenesRequeridos = [];
    }
    get _id() {
        return this.id;
    }
    get _nombre() {
        return this.nombre;
    }
    get _examenesRequeridos() {
        return this.examenesRequeridos;
    }
    set _id(value) {
        this.id = value;
    }
    set _nombre(value) {
        this.nombre = value;
    }
    set _examenesRequeridos(value) {
        this.examenesRequeridos = value;
    }
}
exports.Especialidad = Especialidad;

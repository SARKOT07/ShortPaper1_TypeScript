"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamenMedicoTipo = void 0;
class ExamenMedicoTipo {
    constructor(id, unidad, nombre, valoresPermitidos) {
        this.id = id;
        this.unidad = unidad;
        this.nombre = nombre;
        this.valoresPermitidos = valoresPermitidos;
    }
    get _id() {
        return this.id;
    }
    get _unidad() {
        return this.unidad;
    }
    get _valoresPermitidos() {
        return this.valoresPermitidos;
    }
    set _id(value) {
        this.id = value;
    }
    set _unidad(value) {
        this.unidad = value;
    }
    set _valoresPermitidos(value) {
        this.valoresPermitidos = value;
    }
}
exports.ExamenMedicoTipo = ExamenMedicoTipo;

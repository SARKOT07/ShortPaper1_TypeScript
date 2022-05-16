"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamenValor = void 0;
class ExamenValor {
    constructor(id, valorActual, tipo) {
        this.id = id;
        this.valorActual = valorActual;
        this.tipo = tipo;
    }
    get _id() {
        return this._id;
    }
    set _id(value) {
        this._id = value;
    }
    get _valorActual() {
        return this.valorActual;
    }
    set _valorActual(value) {
        this.valorActual = value;
    }
    get _tipo() {
        return this.tipo;
    }
    set _tipo(value) {
        this.tipo = value;
    }
    verificarEstado(valorActual) {
        //Se verfica el nivel de los valores de la persona y retorna si esta entre los niveles normales o alterados
        const resultado = "placeholder";
        return resultado;
    }
}
exports.ExamenValor = ExamenValor;

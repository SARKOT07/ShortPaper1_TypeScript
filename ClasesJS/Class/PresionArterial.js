"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PresionArterial = void 0;
class PresionArterial {
    constructor(id, valorActual) {
        this.id = id;
        this.valorActual = valorActual;
    }
    get _id() {
        return this.id;
    }
    set _id(value) {
        this.id = value;
    }
    get _valorActual() {
        return this.valorActual;
    }
    set _valorActual(value) {
        this.valorActual = value;
    }
}
exports.PresionArterial = PresionArterial;

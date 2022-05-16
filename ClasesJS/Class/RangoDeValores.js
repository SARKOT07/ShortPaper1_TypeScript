"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RangoDeValores = void 0;
class RangoDeValores {
    constructor(valorMinimo, valorMaximo) {
        this.valorMinimo = valorMinimo;
        this.valorMaximo = valorMaximo;
    }
    get _valorMinimo() {
        return this.valorMinimo;
    }
    set _valorMinimo(value) {
        this.valorMinimo = value;
    }
    get _valorMaximo() {
        return this.valorMaximo;
    }
    set _valorMaximo(value) {
        this.valorMaximo = value;
    }
}
exports.RangoDeValores = RangoDeValores;

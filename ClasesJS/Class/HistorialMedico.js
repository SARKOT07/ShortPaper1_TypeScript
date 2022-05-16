"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistorialMedico = void 0;
class HistorialMedico {
    constructor(id, antecedentesPersonales, frecuenciaCardiaca, saturacion, peso, altura, resultadoDelValor, resultadoDeLaPresion, historialDelPaciente) {
        this.id = id;
        this.antecedentesPersonales = antecedentesPersonales;
        this.frecuenciaCardiaca = frecuenciaCardiaca;
        this.saturacion = saturacion;
        this.peso = peso;
        this.altura = altura;
        this.resultadoDelValor = resultadoDelValor;
        this.resultadoDeLaPresion = resultadoDeLaPresion;
        this.historialDelPaciente = [];
    }
    get _id() {
        return this.id;
    }
    set _id(value) {
        this.id = value;
    }
    get _antecedentesPersonales() {
        return this.antecedentesPersonales;
    }
    set _antecedentesPersonales(value) {
        this.antecedentesPersonales = value;
    }
    get _frecuenciaCardiaca() {
        return this.frecuenciaCardiaca;
    }
    set _frecuenciaCardiaca(value) {
        this.frecuenciaCardiaca = value;
    }
    get _saturacion() {
        return this.saturacion;
    }
    set _saturacion(value) {
        this.saturacion = value;
    }
    get _peso() {
        return this.peso;
    }
    set _peso(value) {
        this.peso = value;
    }
    get _altura() {
        return this.altura;
    }
    set _altura(value) {
        this.altura = value;
    }
    get _resultadoDelValor() {
        return this.resultadoDelValor;
    }
    set _resultadoDelValor(value) {
        this.resultadoDelValor = value;
    }
    get _resultadoDeLaPresion() {
        return this.resultadoDeLaPresion;
    }
    set _resultadoDeLaPresion(value) {
        this.resultadoDeLaPresion = value;
    }
    get _historialDelPaciente() {
        return this.historialDelPaciente;
    }
    set _historialDelPaciente(value) {
        this.historialDelPaciente = value;
    }
}
exports.HistorialMedico = HistorialMedico;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Suscripcion = void 0;
class Suscripcion {
    constructor(id, fechaVencimiento, monto, modalidad, estado, beneficioEmpleado, metodoDePagoElegido) {
        this.id = id;
        this.fechaVencimiento = fechaVencimiento;
        this.monto = monto;
        this.modalidad = modalidad;
        this.estado = estado;
        this.beneficioEmpleado = beneficioEmpleado;
        this.metodoDePagoElegido = metodoDePagoElegido;
    }
    //Getters
    get Id() {
        return this.id;
    }
    get FechaVencimiento() {
        return this.fechaVencimiento;
    }
    get Monto() {
        return this.monto;
    }
    get Modalidad() {
        return this.modalidad;
    }
    get Estado() {
        return this.estado;
    }
    get BeneficioEmpleado() {
        return this.beneficioEmpleado;
    }
    get MetodoDePagoElegido() {
        return this.metodoDePagoElegido;
    }
    //Setters
    set Id(value) {
        this.id = value;
    }
    set FechaVencimiento(value) {
        this.fechaVencimiento = value;
    }
    set Monto(value) {
        this.monto = value;
    }
    set Modalidad(value) {
        this.modalidad = value;
    }
    set Estado(value) {
        this.estado = value;
    }
    set BeneficioEmpleado(value) {
        this.beneficioEmpleado = value;
    }
    set MetodoDePagoElegido(value) {
        this.metodoDePagoElegido = value;
    }
    //methods
    verificarSuscripcion() {
    }
    ;
    cancelarSuscripcion() {
    }
    ;
    verificarBeneficioEmpleado() {
        //Se verifica el beneficio empleado
    }
    ;
}
exports.Suscripcion = Suscripcion;

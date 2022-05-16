"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TarjetaDeCredito = void 0;
class TarjetaDeCredito {
    constructor(id, numeroTarjeta, nombreAsociado, fechaVencimiento, cvv) {
        this.id = id;
        this.numeroTarjeta = numeroTarjeta;
        this.nombreAsociado = nombreAsociado;
        this.fechaVencimiento = fechaVencimiento;
        this.cvv = cvv;
    }
    //Getters
    get Id() {
        return this.id;
    }
    get NumeroTarjeta() {
        return this.numeroTarjeta;
    }
    get NombreAsociado() {
        return this.nombreAsociado;
    }
    get FechaVencimiento() {
        return this.fechaVencimiento;
    }
    //Setters
    set Id(value) {
        this.id = value;
    }
    set NumeroTarjeta(value) {
        this.numeroTarjeta = value;
    }
    set NombreAsociado(value) {
        this.nombreAsociado = value;
    }
    set FechaVencimiento(value) {
        this.fechaVencimiento = value;
    }
    //methods
    calcularComision(montoSuscripcion) {
        //Se calcula la comision del monto para beneficios
    }
    ;
    pago() {
        //Se realiza el pago    
    }
    ;
    verificarPago() {
        //Se verifica el pago
    }
    ;
}
exports.TarjetaDeCredito = TarjetaDeCredito;

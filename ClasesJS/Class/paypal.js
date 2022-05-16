"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paypal = void 0;
class Paypal {
    constructor(id, correo, contraseña) {
        this.id = id;
        this.correo = correo;
        this.contraseña = contraseña;
    }
    //Getters
    get Id() {
        return this.id;
    }
    get Correo() {
        return this.correo;
    }
    get Contraseña() {
        return this.contraseña;
    }
    //Setters
    set Id(value) {
        this.id = value;
    }
    set Correo(value) {
        this.correo = value;
    }
    set Contraseña(value) {
        this.contraseña = value;
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
exports.Paypal = Paypal;

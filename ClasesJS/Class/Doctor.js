"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Doctor = void 0;
const Persona_1 = require("./Persona");
class Doctor extends Persona_1.Persona {
    constructor(id, Nombre, Apellido, especialidad) {
        super(id, Nombre, Apellido);
        this.especialidad = especialidad;
        this.historialMedicoRealizado = [];
        this.citasAgendadas = [];
    }
    get _id() {
        return this.id;
    }
    get _Nombre() {
        return this.Nombre;
    }
    get _Apellido() {
        return this.Apellido;
    }
    get _especialidad() {
        return this.especialidad;
    }
    get _historialMedicoRealizado() {
        return this.historialMedicoRealizado;
    }
    get _citasAgendadas() {
        return this.citasAgendadas;
    }
    set _citasAgendadas(value) {
        this.citasAgendadas = value;
    }
    set _historialMedicoRealizado(value) {
        this.historialMedicoRealizado = value;
    }
    set _id(value) {
        this.id = value;
    }
    set _Nombre(value) {
        this.Nombre = value;
    }
    set _Apellido(value) {
        this.Apellido = value;
    }
    set _especialidad(value) {
        this.especialidad = value;
    }
    modificar(persona) {
    }
    ;
    consultar(persona) {
    }
    ;
    editarHistoriaMedica(historialMedico) {
        return historialMedico;
    }
    ;
    crearHistoriaMedica(historial) {
    }
    ;
    agendarCita() {
        //Se agenda la cita que estaba en proceso
    }
    ;
}
exports.Doctor = Doctor;

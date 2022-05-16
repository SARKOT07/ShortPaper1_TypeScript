"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paciente = void 0;
const Persona_1 = require("./Persona");
const EstadoCita_1 = require("../Enumerations/EstadoCita");
const CitaPresencial_1 = require("./CitaPresencial");
const CitaVirtual_1 = require("./CitaVirtual");
const prompt = require("prompt-sync")();
class Paciente extends Persona_1.Persona {
    constructor(id, Nombre, Apellido, fechaNacimiento, profesion, peso, telefono, correoElectronico, suscripcion) {
        super(id, Nombre, Apellido);
        this.fechaNacimiento = fechaNacimiento;
        this.profesion = profesion;
        this.peso = peso;
        this.telefono = telefono;
        this.correoElectronico = correoElectronico;
        this.suscripcion = suscripcion;
        this.listaDeCitasPresencial = [];
        this.listaDeCitasVirtual = [];
    }
    //Getters
    get _id() {
        return this.id;
    }
    get _Nombre() {
        return this.Nombre;
    }
    get _Apellido() {
        return this.Apellido;
    }
    get FechaNacimiento() {
        return this.fechaNacimiento;
    }
    get Profesion() {
        return this.profesion;
    }
    get Peso() {
        return this.peso;
    }
    get Telefono() {
        return this.telefono;
    }
    get CorreoElectronico() {
        return this.correoElectronico;
    }
    get Suscripcion() {
        return this.suscripcion;
    }
    get ListaDeCitasPresencial() {
        return this.listaDeCitasPresencial;
    }
    get ListaDeCitasVirtual() {
        return this.listaDeCitasVirtual;
    }
    //Setters
    set _id(value) {
        this.id = value;
    }
    set _Nombre(value) {
        this.Nombre = value;
    }
    set _Apellido(value) {
        this.Apellido = value;
    }
    set FechaNacimiento(value) {
        this.fechaNacimiento = value;
    }
    set Profesion(value) {
        this.profesion = value;
    }
    set Peso(value) {
        this.peso = value;
    }
    set Telefono(value) {
        this.telefono = value;
    }
    set CorreoElectronico(value) {
        this.correoElectronico = value;
    }
    set Suscripcion(value) {
        this.suscripcion = value;
    }
    set ListaDeCitasPresencial(value) {
        this.listaDeCitasPresencial = value;
    }
    set ListaDeCitasVirtual(value) {
        this.listaDeCitasVirtual = value;
    }
    //methods
    modificar(persona) {
    }
    ;
    consultar(persona) {
        console.log(`\n`);
        console.log(`Se ha registrado sastifactoriamente el Paciente`);
        console.log(`\n`);
        console.log(`Datos:`);
        console.log(`\n`);
        console.log(`id: ${this._id}`);
        console.log(`Nombre: ${this._Nombre}`);
        console.log(`Apellido: ${this._Apellido}`);
        console.log(`Fecha de nacimiento: ${this.FechaNacimiento}`);
        console.log(`Profesion: ${this.Profesion}`);
        console.log(`Peso: ${this.Peso}`);
        console.log(`Telefono: ${this.Telefono}`);
        console.log(`Correo electronico: ${this.CorreoElectronico} \n`);
    }
    ;
    calcularEdad() {
        //Se calcula la edad a traves de la fecha de nacimiento
        const zero = 0;
        return zero;
    }
    ;
    pedirCitaPresencial() {
        //Se pide la cita, donde la cita quedara en proceso
        const fecha = prompt("¿Que dia desea agendar su cita? Utilice el formato aaaa-mm-dd ");
        const hora = prompt("¿A que hora desea que se realize la consulta? Utilice el formato hh:mm:ss ");
        let fechaYHora = new Date(fecha + "T" + hora);
        const lugar = prompt("¿Donde desea que se lleve a acabo la cita? Indique una ciudad dentro de caracas ");
        const longitud = "52° 31' 28'' N";
        const latitud = "13° 24' 38'' E";
        const personaCitada = this;
        const historialMedicoDeLaCita = [];
        let newCita = new CitaPresencial_1.CitaPresencial("1", fechaYHora, EstadoCita_1.EstadoCita.Agendado, personaCitada, historialMedicoDeLaCita, lugar, longitud, latitud);
        return newCita;
    }
    ;
    pedirCitaVirtual() {
        const fecha = prompt("¿Que dia desea agendar su cita? Utilice el formato aaaa-mm-dd ");
        const hora = prompt("¿A que hora desea que se realize la consulta? Utilice el formato hh:mm:ss ");
        let fechaYHora = new Date(fecha + "T" + hora);
        const url = "https://explore.zoom.us/es/products/meetings/";
        const personaCitada = this;
        const historialMedicoDeLaCita = [];
        let newCita = new CitaVirtual_1.CitaVirtual("1", fechaYHora, EstadoCita_1.EstadoCita.Agendado, personaCitada, historialMedicoDeLaCita, url);
        return newCita;
    }
    consultarHistorialMedico(historialMedico) {
        //Se consulta el historial medico del paciente
    }
    ;
}
exports.Paciente = Paciente;

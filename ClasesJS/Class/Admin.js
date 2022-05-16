"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = void 0;
const Doctor_1 = require("./Doctor");
const RangoDeValores_1 = require("./RangoDeValores");
const ExamenMedicoTipo_1 = require("./ExamenMedicoTipo");
const Especialidad_1 = require("./Especialidad");
const Paciente_1 = require("./Paciente");
const Suscripcion_1 = require("./Suscripcion");
const paypal_1 = require("./paypal");
const Modalidad_1 = require("../Enumerations/Modalidad");
const Estado_1 = require("../Enumerations/Estado");
const prompt = require("prompt-sync")();
class Admin {
    registrarPaciente() {
        const nombreQ = prompt("Cual es tu nombre? ");
        const apellidoQ = prompt("Cual es tu apellido? ");
        const fechaNQ = prompt("Cual es tu fecha de nacimiento? ");
        const profesionQ = prompt("Cual es tu profesion? ");
        const pesoQ = prompt("Cual es tu peso? ");
        const telefonoQ = prompt("Cual es tu telefono? ");
        const correoQ = prompt("Cual es tu correo electronico? ");
        let paypalNew = new paypal_1.Paypal('1', 'franco@gmail.com', '123456');
        let suscripcionNew = new Suscripcion_1.Suscripcion('1', '2023-06-20', 50, Modalidad_1.Modalidad.Anual, Estado_1.Estado.Activo, false, paypalNew);
        let pacienteNew = new Paciente_1.Paciente('1', nombreQ, apellidoQ, fechaNQ, profesionQ, pesoQ, telefonoQ, correoQ, suscripcionNew);
        return pacienteNew;
    }
    ;
    registrarDoctor() {
        let rango = new RangoDeValores_1.RangoDeValores(50, 50);
        let examen_unico = new ExamenMedicoTipo_1.ExamenMedicoTipo('1', '20', 'Emoglobina', rango);
        var lista_de_examenes = new Array();
        lista_de_examenes.push(examen_unico);
        let especialidad = new Especialidad_1.Especialidad('1', 'Pediatria');
        var lista_de_especialidades = new Array();
        lista_de_especialidades.push(especialidad);
        let doctor = new Doctor_1.Doctor('1', 'Diego', 'Cumares', lista_de_especialidades);
        return doctor;
    }
}
exports.Admin = Admin;

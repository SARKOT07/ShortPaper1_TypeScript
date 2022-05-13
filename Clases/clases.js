"use strict";
class Persona {
    constructor(id, Nombre, Apellido) {
        this.id = id;
        this.Nombre = Nombre;
        this.Apellido = Apellido;
    }
}
class Doctor extends Persona {
    constructor(id, Nombre, Apellido, especialidad) {
        super(id, Nombre, Apellido);
        this.especialidad = especialidad;
        this.especialidad = especialidad;
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
    modificar() {
    }
    ;
    consultar() {
    }
    ;
    editarHistoriaMedica(historialMedico) {
    }
    ;
    crearHistoriaMedica(historial) {
    }
    ;
    agregarCita() {
    }
    ;
}
class Cita {
}
class Especialidad {
    constructor(id, nombre, examenesRequeridos) {
        this.id = id;
        this.nombre = nombre;
        this.examenesRequeridos = examenesRequeridos;
    }
    get _id() {
        return this.id;
    }
    get _nombre() {
        return this.nombre;
    }
    get _examenesRequeridos() {
        return this.examenesRequeridos;
    }
    set _id(value) {
        this.id = value;
    }
    set _nombre(value) {
        this.nombre = value;
    }
    set _examenesRequeridos(value) {
        this.examenesRequeridos = value;
    }
}
class HistorialMedico {
}
class RangoDeValores {
}
class ExamenMedicoTipo {
    constructor(id, unidad, nombre, valoresPermitidos) {
        this.id = id;
        this.unidad = unidad;
        this.nombre = nombre;
        this.valoresPermitidos = valoresPermitidos;
    }
    get _id() {
        return this.id;
    }
    get _unidad() {
        return this.unidad;
    }
    get _valoresPermitidos() {
        return this.valoresPermitidos;
    }
    set _id(value) {
        this.id = value;
    }
    set _unidad(value) {
        this.unidad = value;
    }
    set _valoresPermitidos(value) {
        this.valoresPermitidos = value;
    }
}
class Admin {
    registrarPaciente() {
    }
    registrarDoctor() {
        let rango = new RangoDeValores();
        let examen_unico = new ExamenMedicoTipo('1', '20', 'Emoglobina', rango);
        var lista_de_examenes = new Array();
        lista_de_examenes.push(examen_unico);
        let especialidad = new Especialidad('1', 'Pediatria', lista_de_examenes);
        var lista_de_especialidades = new Array();
        lista_de_especialidades.push(especialidad);
        let doctor = new Doctor('1', 'Diego', 'Cumares', lista_de_especialidades);
        return doctor;
    }
}

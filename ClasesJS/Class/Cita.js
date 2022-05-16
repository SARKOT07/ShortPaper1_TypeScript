"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cita = void 0;
class Cita {
    constructor(id, fechayHora, estado, personaCitada, historialMedicoDeLaCita) {
        this.id = id;
        this.fechayHora = fechayHora;
        this.estado = estado;
        this.personaCitada = personaCitada;
        this.historialMedicoDeLaCita = historialMedicoDeLaCita;
    }
    get Id() {
        return this.id;
    }
    get FechayHora() {
        return this.fechayHora;
    }
    get Estado() {
        return this.estado;
    }
    get PersonaCitada() {
        return this.personaCitada;
    }
    get HistorialMedicoDeLaCita() {
        return this.historialMedicoDeLaCita;
    }
    set Id(value) {
        this.id = value;
    }
    set FechayHora(value) {
        this.fechayHora = value;
    }
    set Estado(value) {
        this.estado = value;
    }
    set PersonaCitada(value) {
        this.personaCitada = value;
    }
    set HistorialMedicoDeLaCita(value) {
        this.historialMedicoDeLaCita = value;
    }
    modificarCita() {
    }
    eliminarCita() {
    }
    consultarCita() {
    }
}
exports.Cita = Cita;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitaPresencial = void 0;
const Cita_1 = require("./Cita");
class CitaPresencial extends Cita_1.Cita {
    constructor(id, fechayHora, estado, personaCitada, historialMedicoDeLaCita, direccion, longitud, altitud) {
        super(id, fechayHora, estado, personaCitada, historialMedicoDeLaCita);
        this.direccion = direccion;
        this.longitud = longitud;
        this.altitud = altitud;
    }
    get _direccion() {
        return this.direccion;
    }
    set _direccion(value) {
        this.direccion = value;
    }
    get _longitud() {
        return this.longitud;
    }
    set _longitud(value) {
        this.longitud = value;
    }
    get _altitud() {
        return this.altitud;
    }
    set _altitud(value) {
        this.altitud = value;
    }
    modificarCita() {
        super.modificarCita();
    }
    eliminarCita() {
        super.eliminarCita();
    }
    consultarCita() {
        console.log(`Se ha solicitado una cita presencial con id ${this.Id}, para la fecha y hora ${this.FechayHora} a nombre de ${this.PersonaCitada._Nombre} ${this.PersonaCitada._Apellido} con historial medico ${this.HistorialMedicoDeLaCita} donde tomara lugar en ${this._direccion} (${this._longitud}, ${this._altitud}).`);
        console.log(`Estado actual de la cita: ${this.Estado}`);
    }
}
exports.CitaPresencial = CitaPresencial;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CitaVirtual = void 0;
const Cita_1 = require("./Cita");
class CitaVirtual extends Cita_1.Cita {
    constructor(id, fechayHora, estado, personaCitada, historialMedicoDeLaCita, url) {
        super(id, fechayHora, estado, personaCitada, historialMedicoDeLaCita);
        this.url = url;
    }
    get _url() {
        return this.url;
    }
    set _url(value) {
        this.url = value;
    }
    modificarCita() {
        super.modificarCita();
    }
    eliminarCita() {
        super.eliminarCita();
    }
    consultarCita() {
        console.log(`Se ha solicitado una cita virtual con id ${this.Id}, para la fecha y hora ${this.FechayHora} a nombre de ${this.PersonaCitada._Nombre} ${this.PersonaCitada._Apellido} con historial medico ${this.HistorialMedicoDeLaCita} donde tomara lugar en ${this._url}.`);
        console.log(`Estado actual de la cita: ${this.Estado}`);
    }
}
exports.CitaVirtual = CitaVirtual;

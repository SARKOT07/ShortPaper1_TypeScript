"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservadorAuditar = void 0;
class ObservadorAuditar {
    constructor(evento) {
        this.evento = evento;
    }
    //Getters
    get Evento() {
        return this.evento;
    }
    //Setters
    set Evento(value) {
        this.evento = value;
    }
    //methods
    guardar() {
        //Se guarda los datos importantes que se observo en los comportamientos
    }
    ;
    establecerDatos(eventoRealizado, Paciente, Doctor) {
        //Se establecen los datos importantes que se observo en los comportamientos
    }
    ;
}
exports.ObservadorAuditar = ObservadorAuditar;

import { Cita } from "./Cita";
import { Paciente } from "./Paciente";
import { HistorialMedico } from "./HistorialMedico";
import { EstadoCita } from "../Enumerations/EstadoCita";

export class CitaVirtual extends Cita {
    
    constructor (id: string, fechayHora: Date, estado: EstadoCita, personaCitada: Paciente, historialMedicoDeLaCita: HistorialMedico[], private url: string ) {
        super(id,fechayHora,estado,personaCitada,historialMedicoDeLaCita);
    }

    public get _url(): string {
        return this.url;
    }

    public set _url(value: string) {
        this.url = value;
    }

    modificarCita () {
        super.modificarCita();
    }

    eliminarCita () {
        super.eliminarCita();
    }

    consultarCita () {
        console.log(`Se ha solicitado una cita virtual con id ${this.Id}, para la fecha y hora ${this.FechayHora} a nombre de ${this.PersonaCitada._Nombre} ${this.PersonaCitada._Apellido} con historial medico ${this.HistorialMedicoDeLaCita} donde tomara lugar en ${this._url}.`);
        console.log(`Estado actual de la cita: ${this.Estado}`);
    }


}
import { Cita } from "./Cita";
import { Paciente } from "./Paciente";
import { HistorialMedico } from "./HistorialMedico";
import { EstadoCita } from "../Enumerations/EstadoCita";


export class CitaPresencial extends Cita {

    constructor (id: string, fechayHora: Date, estado: EstadoCita, personaCitada: Paciente, historialMedicoDeLaCita: HistorialMedico[], private direccion: string, private longitud: string, private altitud: string) {
        super(id,fechayHora,estado,personaCitada,historialMedicoDeLaCita);
    }

    public get _direccion(): string {
        return this.direccion;
    }

    public set _direccion(value: string) {
        this.direccion = value;
    }

    public get _longitud (): string {
        return this.longitud;
    }

    public set _longitud (value: string) {
        this.longitud = value;
    }

    public get _altitud(): string {
        return this.altitud;
    }
    
    public set _altitud(value: string) {
        this.altitud = value;
    }

    modificarCita () {
        super.modificarCita();
    }

    eliminarCita () {
        super.eliminarCita();
    }

    consultarCita () {
        console.log(`Se ha solicitado una cita presencial con id ${this.Id}, para la fecha y hora ${this.FechayHora} a nombre de ${this.PersonaCitada._Nombre} ${this.PersonaCitada._Apellido} con historial medico ${this.HistorialMedicoDeLaCita} donde tomara lugar en ${this._direccion} (${ this._longitud}, ${ this._altitud}).`);
        console.log(`Estado actual de la cita: ${this.Estado}`);
    }
}
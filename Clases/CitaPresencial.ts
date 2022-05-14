import { Cita } from "./Cita";
import { Paciente } from "./Paciente";
import { HistorialMedico } from "./HistorialMedico";


export class CitaPresencial extends Cita {

    constructor (id: string, fechayHora: Date, personaCitada: Paciente[], historialMedicoDeLaCita: HistorialMedico[], private direccion: string, private longitud: string, private altitud: string) {
        super(id,fechayHora,personaCitada,historialMedicoDeLaCita);
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

    
}
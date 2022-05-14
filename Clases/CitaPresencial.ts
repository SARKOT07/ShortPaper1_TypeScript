import { Cita } from "./Cita";
import { Paciente } from "./Paciente";
import { HistorialMedico } from "./HistorialMedico";


export class CitaPresencial extends Cita {

    private direccion: String;
    private longitud: String;
    private altitud: String; 

    constructor (id: String, fechayHora: Date, personaCitada: Paciente[], historialMedicoDeLaCita: HistorialMedico[], direccion: String, longitud: String, altitud: String) {
        super(id,fechayHora,personaCitada,historialMedicoDeLaCita);
        this.direccion = direccion;
        this.longitud = longitud;
        this.altitud = altitud;
    }

    public get _direccion(): String {
        return this.direccion;
    }

    public set _direccion(value: String) {
        this.direccion = value;
    }

    public get _longitud (): String {
        return this.longitud;
    }

    public set _longitud (value: String) {
        this.longitud = value;
    }

    public get _altitud(): String {
        return this.altitud;
    }
    public set _altitud(value: String) {
        this.altitud = value;
    }

    
}
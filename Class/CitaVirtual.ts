import { Cita } from "./Cita";
import { Paciente } from "./Paciente";
import { HistorialMedico } from "./HistorialMedico";
import { EstadoCita } from "../Enumerations/EstadoCita";

export class CitaVirtual extends Cita {
    
    constructor (id: string, fechayHora: Date, estado: EstadoCita, personaCitada: Paciente[], historialMedicoDeLaCita: HistorialMedico[], private url: string ) {
        super(id,fechayHora,estado,personaCitada,historialMedicoDeLaCita);
    }

    public get _url(): string {
        return this.url;
    }

    public set _url(value: string) {
        this.url = value;
    }


}
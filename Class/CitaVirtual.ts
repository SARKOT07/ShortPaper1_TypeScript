import { Cita } from "./Cita";
import { Paciente } from "./Paciente";
import { HistorialMedico } from "./HistorialMedico";


export class CitaVirtual extends Cita {
    
    constructor (id: string, fechayHora: Date, personaCitada: Paciente[], historialMedicoDeLaCita: HistorialMedico[], private url: string ) {
        super(id,fechayHora,personaCitada,historialMedicoDeLaCita);
    }

    public get _url(): string {
        return this.url;
    }

    public set _url(value: string) {
        this.url = value;
    }


}
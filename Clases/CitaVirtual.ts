import { Cita } from "./Cita";
import { Paciente } from "./Paciente";
import { HistorialMedico } from "./HistorialMedico";


export class CitaVirtual extends Cita {

    private url: String;
    
    constructor (id: String, fechayHora: Date, personaCitada: Paciente[], historialMedicoDeLaCita: HistorialMedico[], url: String, ) {
        super(id,fechayHora,personaCitada,historialMedicoDeLaCita);
        this.url = url;
    }

    public get _url(): String {
        return this.url;
    }
    public set _url(value: String) {
        this.url = value;
    }


}
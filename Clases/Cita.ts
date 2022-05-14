import { HistorialMedico } from "./HistorialMedico"
import { Paciente } from "./Paciente"

    
export class Cita {

    protected id: String
    protected fechayHora: Date
    protected personaCitada?: Paciente[]
    protected historialMedicoDeLaCita?: HistorialMedico[]

    constructor (id: String, fechayHora: Date, personaCitada: Paciente[], historialMedicoDeLaCita: HistorialMedico[]) {
        this.id = id;
        this.fechayHora = fechayHora;
        this.personaCitada = personaCitada;
        this.historialMedicoDeLaCita = historialMedicoDeLaCita;
    }

    get _id () : String{
        return this.id;
    }

    set _id (value: String) {
        this.id = value;
    }

    get _fechayHora () {
        return this.fechayHora;
    }

    set _fechayHora (value: Date) {
        this.fechayHora = value;
    }

    get _personaCitada () : Paciente[] {
        
        if (this.personaCitada) {
            return this.personaCitada;
        } else {
            return [];
        }
        
    }

    set _personaCitada (value: Paciente[]) {
        this.personaCitada = value;
    }

    get _historialMedicoDeLaCita () : HistorialMedico[] {
        
        if (this.historialMedicoDeLaCita) {
            return this.historialMedicoDeLaCita;
        } else {
            return [];
        }
        
    }

    set _historialMedicoDeLaCita (value: HistorialMedico[]) {
        this.historialMedicoDeLaCita = value;
    }

    modificarCita (citaSolicitada: Cita) {

    }

    eliminarCita (citaSolicitada: Cita) {

    }

    consultarCita (citaSolicitada: Cita) {
        
    }
}
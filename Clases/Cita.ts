import { HistorialMedico } from "./HistorialMedico"
import { Paciente } from "./Paciente"

    
export class Cita {

    protected personaCitada?: Paciente[]

    constructor (protected id: string, protected fechayHora: Date, personaCitada: Paciente[], protected historialMedicoDeLaCita: HistorialMedico[]) {
        this.personaCitada = []
    }

    get _id () : string{
        return this.id;
    }

    set _id (value: string) {
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
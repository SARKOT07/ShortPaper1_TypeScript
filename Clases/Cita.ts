import { HistorialMedico } from "./HistorialMedico"
import { Paciente } from "./Paciente"

    
export class Cita {


    constructor (protected id: string, protected fechayHora: Date, protected personaCitada: Paciente[], protected historialMedicoDeLaCita: HistorialMedico[]) {
        
    }

    
    modificarCita (citaSolicitada: Cita) {

    }

    eliminarCita (citaSolicitada: Cita) {

    }

    consultarCita (citaSolicitada: Cita) {
        
    }
}
import { HistorialMedico } from "./HistorialMedico"
import { Paciente } from "./Paciente"
import { EstadoCita } from "../Enumerations/EstadoCita"

    
export class Cita {

    constructor (private id: string, private fechayHora: Date,private estado: EstadoCita , private personaCitada: Paciente[], private historialMedicoDeLaCita: HistorialMedico[]) {      
    }

    get Id(): string {
        return this.id
    }
    get FechayHora(): Date {
        return this.fechayHora
    }
    get Estado(): EstadoCita {
        return this.estado
    }
    get PersonaCitada(): Paciente[] {
        return this.personaCitada
    }
    get HistorialMedicoDeLaCita(): HistorialMedico[] {
        return this.historialMedicoDeLaCita
    }

    set Id(value: string) {
        this.id = value
    }
    set FechayHora(value: Date) {
        this.fechayHora = value
    }
    set Estado(value: EstadoCita) {
        this.estado = value
    }
    set PersonaCitada(value: Paciente[]) {
        this.personaCitada = value
    }
    set HistorialMedicoDeLaCita(value: HistorialMedico[]) {
        this.historialMedicoDeLaCita = value
    }
    modificarCita (citaSolicitada: Cita) {

    }

    eliminarCita (citaSolicitada: Cita) {

    }

    consultarCita (citaSolicitada: Cita) {
        
    }
}
import { Paciente } from "./Paciente"
import { ExamenValor } from "./ExamenValor"
import { PresionArterial } from "./PresionArterial"


export class HistorialMedico{

    private historialDelPaciente?: Paciente[] | undefined

    constructor (private id: string, private antecedentesPersonales: string, private frecuenciaCardiaca: number, private saturacion: number, private peso: number, private altura: number, private resultadoDelValor: ExamenValor[], private resultadoDeLaPresion: PresionArterial[], historialDelPaciente: Paciente[]) {
        this.historialDelPaciente = []
    }

    public get _id(): string {
        return this.id
    }

    public set _id(value: string) {
        this.id = value
    }

    public get _antecedentesPersonales (): string {
        return this.antecedentesPersonales
    }

    public set _antecedentesPersonales (value: string) {
        this.antecedentesPersonales = value
    }

    public get _frecuenciaCardiaca(): number {
        return this.frecuenciaCardiaca
    }

    public set _frecuenciaCardiaca(value: number) {
        this.frecuenciaCardiaca = value
    }

    public get _saturacion(): number {
        return this.saturacion
    }

    public set _saturacion(value: number) {
        this.saturacion = value
    }

    public get _peso(): number {
        return this.peso
    }

    public set _peso(value: number) {
        this.peso = value
    }
    
    public get _altura(): number {
        return this.altura
    }

    public set _altura(value: number) {
        this.altura = value
    }

    public get _resultadoDelValor (): ExamenValor[] {
        return this.resultadoDelValor
    }

    public set _resultadoDelValor (value: ExamenValor[]) {
        this.resultadoDelValor = value
    }

    public get _resultadoDeLaPresion(): PresionArterial[] {
        return this.resultadoDeLaPresion
    }

    public set _resultadoDeLaPresion(value: PresionArterial[]) {
        this.resultadoDeLaPresion = value
    }

    public get _historialDelPaciente(): Paciente[] | undefined {
        return this.historialDelPaciente
    }

    public set _historialDelPaciente(value: Paciente[] | undefined) {
        this.historialDelPaciente = value
    }
    


}
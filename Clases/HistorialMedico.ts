import { Paciente } from "./Paciente"
import { ExamenValor } from "./ExamenValor"
import { PresionArterial } from "./PresionArterial"


export class HistorialMedico{

    private id: String
    private antecedentesPersonales: String
    private frecuenciaCardiaca: Number
    private saturacion: Number
    private peso: Number
    private altura: Number
    private historialDelPaciente?: Paciente[] | undefined

    constructor (id: String, antecedentesPersonales: String, frecuenciaCardiaca: Number, saturacion: Number, peso: Number, altura: Number, private resultadoDelValor: ExamenValor[], private resultadoDeLaPresion: PresionArterial[], historialDelPaciente: Paciente[]) {
        this.id = id;
        this.antecedentesPersonales = antecedentesPersonales;
        this.frecuenciaCardiaca = frecuenciaCardiaca;
        this.saturacion = saturacion;
        this.peso = peso
        this.altura = altura
        this.resultadoDelValor = []
        this.resultadoDeLaPresion = []
        this.historialDelPaciente = []
    }

    public get _id(): String {
        return this.id
    }

    public set _id(value: String) {
        this.id = value
    }

    public get _antecedentesPersonales (): String {
        return this.antecedentesPersonales
    }

    public set _antecedentesPersonales (value: String) {
        this.antecedentesPersonales = value
    }

    public get _frecuenciaCardiaca(): Number {
        return this.frecuenciaCardiaca
    }

    public set _frecuenciaCardiaca(value: Number) {
        this.frecuenciaCardiaca = value
    }

    public get _saturacion(): Number {
        return this.saturacion
    }

    public set _saturacion(value: Number) {
        this.saturacion = value
    }

    public get _peso(): Number {
        return this.peso
    }

    public set _peso(value: Number) {
        this.peso = value
    }
    
    public get _altura(): Number {
        return this.altura
    }

    public set _altura(value: Number) {
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
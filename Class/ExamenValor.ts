import { ExamenMedicoTipo } from "./ExamenMedicoTipo"


export class ExamenValor {
    
    constructor (private id: string, private valorActual: number, private tipo: ExamenMedicoTipo[]) {
  
    }

    public get _id(): string {
        return this._id;
    }

    public set _id(value: string) {
        this._id = value;
    }

    public get _valorActual(): number {
        return this.valorActual;
    }
    public set _valorActual(value: number) {
        this.valorActual = value;
    }

    public get _tipo(): ExamenMedicoTipo[] {
        return this.tipo;
    }

    public set _tipo(value: ExamenMedicoTipo[]) {
        this.tipo = value;
    }

    verificarEstado (valorActual: number) : string {
        const resultado  = "placeholder"
        return resultado;
    }
}
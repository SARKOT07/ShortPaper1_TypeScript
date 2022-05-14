import { ExamenMedicoTipo } from "./ExamenMedicoTipo"


export class ExamenValor {
    
    constructor (private id: String, private valorActual: Number, private tipo: ExamenMedicoTipo[]) {
  
    }

    public get _id(): String {
        return this._id;
    }

    public set _id(value: String) {
        this._id = value;
    }

    public get _valorActual(): Number {
        return this.valorActual;
    }
    public set _valorActual(value: Number) {
        this.valorActual = value;
    }

    public get _tipo(): ExamenMedicoTipo[] {
        return this.tipo;
    }

    public set _tipo(value: ExamenMedicoTipo[]) {
        this.tipo = value;
    }
}
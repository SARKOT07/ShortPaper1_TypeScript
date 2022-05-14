import { RangoDeValores } from "./RangoDeValores";


export class PresionArterial {
    
    constructor (private id: string, private valorActual: RangoDeValores) {

    }

    public get _id(): string {
        return this.id;
    }

    public set _id(value: string) {
        this.id = value;
    }

    public get _valorActual(): RangoDeValores {
        return this.valorActual;
    }

    public set _valorActual(value: RangoDeValores) {
        this.valorActual = value;
    }

    

}
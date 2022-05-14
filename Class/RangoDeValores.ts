

export class RangoDeValores{
    
    constructor (private valorMinimo: number, private valorMaximo: number) {

    }

    public get _valorMinimo(): number {
        return this.valorMinimo;
    }

    public set _valorMinimo(value: number) {
        this.valorMinimo = value;
    }

    public get _valorMaximo(): number {
        return this.valorMaximo;
    }

    public set _valorMaximo(value: number) {
        this.valorMaximo = value;
    }

}
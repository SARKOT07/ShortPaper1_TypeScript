import { MetodoDePago } from "../Interfaces/MetodoDePago";


export class TarjetaDeCredito implements MetodoDePago{




constructor (private id: string,private numeroTarjeta: number,private nombreAsociado: string,private fechaVencimiento: Date,private cvv: number){

}
    //Getters
    get Id(): string {
        return this.id;
    }
    get NumeroTarjeta(): number {
        return this.numeroTarjeta;
    }
    get NombreAsociado(): string {
        return this.nombreAsociado;
    }
    get FechaVencimiento(): Date {
        return this.fechaVencimiento;
    }


    //Setters
    set Id(value: string) {
        this.id = value;
    }
    set NumeroTarjeta(value: number) {
        this.numeroTarjeta = value;
    }
    set NombreAsociado(value: string) {
        this.nombreAsociado = value;
    }
    set FechaVencimiento(value: Date) {
        this.fechaVencimiento = value;
    }

    //methods
    calcularComision(montoSuscripcion:number): void{
        //Se calcula la comision del monto para beneficios
    };
    pago(): void{
        //Se realiza el pago    
    };
    verificarPago(): void{
        //Se verifica el pago
    };
}

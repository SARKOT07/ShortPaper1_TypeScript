import { MetodoDePago } from "../Interfaces/MetodoDePago";


export class Paypal implements MetodoDePago{




constructor (private id: string,private correo: string,private contraseña: string){

}
    //Getters
    get Id(): string {
        return this.id;
    }
    get Correo(): string {
        return this.correo;
    }
    get Contraseña(): string {
        return this.contraseña;
    }

    //Setters
    set Id(value: string) {
        this.id = value;
    }
    set Correo(value: string) {
        this.correo = value;
    }
    set Contraseña(value: string) {
        this.contraseña = value;
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

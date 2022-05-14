import { MetodoDePago } from "../Interfaces/MetodoDePago";
import { Estado } from "../Enumerations/Estado";
import { Modalidad } from "../Enumerations/Modalidad";

export class Suscripcion{



    constructor (private id: string,private fechaVencimiento: Date,private monto: number,private modalidad: Modalidad,private estado: Estado,private beneficioEmpleado: boolean,private metodoDePagoElegido: MetodoDePago){
      
    } 

    //Getters
    get Id(): string {
        return this.id;
    }
    get FechaVencimiento(): Date {
        return this.fechaVencimiento;
    }
    get Monto(): number {
        return this.monto;
    }
    get Modalidad(): Modalidad {
        return this.modalidad;
    }
    get Estado(): Estado {
        return this.estado;
    }
    get BeneficioEmpleado(): boolean {
        return this.beneficioEmpleado;
    }
    get MetodoDePagoElegido(): MetodoDePago {
        return this.metodoDePagoElegido;
    }

    //Setters
    set Id(value: string) {
        this.id = value;
    }
    set FechaVencimiento(value: Date) {
        this.fechaVencimiento = value;
    }
    set Monto(value: number) {
        this.monto = value;
    }
    set Modalidad(value: Modalidad) {
        this.modalidad = value;
    }
    set Estado(value: Estado) {
        this.estado = value;
    }
    set BeneficioEmpleado(value: boolean) {
        this.beneficioEmpleado = value;
    }
    set MetodoDePagoElegido(value: MetodoDePago) {
        this.metodoDePagoElegido = value;
    }

    //methods
    verificarSuscripcion(): void{

    };
    cancelarSuscripcion(): void{

    };
    verificarBeneficioEmpleado(): void{
        
    };

}


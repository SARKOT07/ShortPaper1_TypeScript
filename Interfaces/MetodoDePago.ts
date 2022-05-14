


export interface MetodoDePago{

    //methods
    calcularComision(montoSuscripcion:number): void;
    pago(): void;
    verificarPago(): void;

}
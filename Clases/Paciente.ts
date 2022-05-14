import { Suscripcion } from "./Suscripcion";
import { Cita } from "./Cita";
import { HistorialMedico } from "./HistorialMedico";
import { Persona } from "./Persona";




export class Paciente extends Persona {

    private listaDeCitas: Cita[];

    constructor (id:string,Nombre:string,Apellido:string,private fechaNacimiento: Date,private profesion: string, private peso: number,private telefono: number[],private correoElectronico: string,private suscripcion: Suscripcion){
        super(id,Nombre,Apellido);
        this.listaDeCitas = [];
    }

   //Getters
    get _id():string{
        return this.id;
    }  
    get _Nombre():string{
        return this.Nombre;
    }  
    get _Apellido():string{
        return this.Apellido;
    }  
    public get FechaNacimiento(): Date {
        return this.fechaNacimiento;
    }
    public get Profesion(): string {
        return this.profesion;
    }
    public get Peso(): number {
        return this.peso;
    }
    public get Telefono(): number[] {
        return this.telefono;
    }
    public get CorreoElectronico(): string {
        return this.correoElectronico;
    }
    public get Suscripcion(): Suscripcion {
        return this.suscripcion;
    }
    public get ListaDeCitas(): Cita[] {
        return this.listaDeCitas;
    }

    //Setters
    set _id(value:string){
        this.id=value;
    }
    set _Nombre(value:string){
        this.Nombre=value;
    }
    set _Apellido(value:string){
        this.Apellido=value;
    }
    public set FechaNacimiento(value: Date) {
        this.fechaNacimiento = value;
    }
    public set Profesion(value: string) {
        this.profesion = value;
    }
    public set Peso(value: number) {
        this.peso = value;
    }
    public set Telefono(value: number[]) {
        this.telefono = value;
    }
    public set CorreoElectronico(value: string) {
        this.correoElectronico = value;
    }
    public set Suscripcion(value: Suscripcion) {
        this.suscripcion = value;
    }
    public set ListaDeCitas(value: Cita[]) {
        this.listaDeCitas = value;
    }

    //methods
    modificar(): void {
        
    }   ;
    consultar(): void {
        
    }   ;
    calcularEdad(): number{
        const zero = 0;
        return zero;
    };
    pedirCita(): void{

    };
    consultarHistorialMedico(historialMedico: HistorialMedico): void{
        
    };
}







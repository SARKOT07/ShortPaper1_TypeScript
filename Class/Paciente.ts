import { Suscripcion } from "./Suscripcion";
import { Cita } from "./Cita";
import { HistorialMedico } from "./HistorialMedico";
import { Persona } from "./Persona";




export class Paciente extends Persona {

    private listaDeCitas: Cita[];

    constructor (id:string,Nombre:string,Apellido:string,private fechaNacimiento: string,private profesion: string, private peso: number,private telefono: number[],private correoElectronico: string,private suscripcion: Suscripcion){
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
    get FechaNacimiento(): string {
        return this.fechaNacimiento;
    }
    get Profesion(): string {
        return this.profesion;
    }
    get Peso(): number {
        return this.peso;
    }
    get Telefono(): number[] {
        return this.telefono;
    }
    get CorreoElectronico(): string {
        return this.correoElectronico;
    }
    get Suscripcion(): Suscripcion {
        return this.suscripcion;
    }
    get ListaDeCitas(): Cita[] {
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
    set FechaNacimiento(value: string) {
        this.fechaNacimiento = value;
    }
    set Profesion(value: string) {
        this.profesion = value;
    }
    set Peso(value: number) {
        this.peso = value;
    }
    set Telefono(value: number[]) {
        this.telefono = value;
    }
    set CorreoElectronico(value: string) {
        this.correoElectronico = value;
    }
    set Suscripcion(value: Suscripcion) {
        this.suscripcion = value;
    }
    set ListaDeCitas(value: Cita[]) {
        this.listaDeCitas = value;
    }

    //methods
    modificar(): void {
        
    }   ;
    consultar(): void {
        
    }   ;
    calcularEdad(): number{
        //Se calcula la edad a traves de la fecha de nacimiento
        const zero = 0;
        return zero;
    };
    pedirCita(): void{
        //Se pide la cita, donde la cita quedara en proceso
    };
    consultarHistorialMedico(historialMedico: HistorialMedico): void{
        //Se consulta el historial medico del paciente
    };
}







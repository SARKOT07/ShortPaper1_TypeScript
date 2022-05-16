import { Suscripcion } from "./Suscripcion";
import { Cita } from "./Cita";
import { HistorialMedico } from "./HistorialMedico";
import { Persona } from "./Persona";
import { EstadoCita } from "../Enumerations/EstadoCita";
import { CitaPresencial } from "./CitaPresencial";
import { CitaVirtual } from "./CitaVirtual";
const prompt = require("prompt-sync")();




export class Paciente extends Persona {

    private listaDeCitasPresencial: CitaPresencial[];
    private listaDeCitasVirtual: CitaVirtual[];

    constructor (id:string,Nombre:string,Apellido:string,private fechaNacimiento: string,private profesion: string, private peso: number,private telefono: number[],private correoElectronico: string,private suscripcion: Suscripcion){
        super(id,Nombre,Apellido);
        this.listaDeCitasPresencial = [];
        this.listaDeCitasVirtual = [];
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
    get ListaDeCitasPresencial(): CitaPresencial[] {
        return this.listaDeCitasPresencial;
    }
    get ListaDeCitasVirtual(): CitaVirtual[] {
        return this.listaDeCitasVirtual;
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
    set ListaDeCitasPresencial(value: CitaPresencial[]) {
        this.listaDeCitasPresencial = value;
    }
    set ListaDeCitasVirtual(value: CitaVirtual[]) {
        this.listaDeCitasVirtual = value;
    }

    //methods
    modificar(persona:Persona): void {
        
    };

    consultar(persona:Persona): void {
        console.log(`\n`);  
        console.log(`Se ha registrado sastifactoriamente el Paciente`);
        console.log(`\n`); 
        console.log(`Datos:`);      
        console.log(`\n`);   
        console.log(`id: ${this._id}`);
        console.log(`Nombre: ${this._Nombre}`);
        console.log(`Apellido: ${this._Apellido}`);
        console.log(`Fecha de nacimiento: ${this.FechaNacimiento}`);
        console.log(`Profesion: ${this.Profesion}`);
        console.log(`Peso: ${this.Peso}`);
        console.log(`Telefono: ${this.Telefono}`);
        console.log(`Correo electronico: ${this.CorreoElectronico} \n`);
    };

    calcularEdad(): number{
        //Se calcula la edad a traves de la fecha de nacimiento
        const zero = 0;
        return zero;
    };

    pedirCitaPresencial(): CitaPresencial{
        //Se pide la cita, donde la cita quedara en proceso
        const fecha = prompt("¿Que dia desea agendar su cita? Utilice el formato aaaa-mm-dd ");
        const hora = prompt("¿A que hora desea que se realize la consulta? Utilice el formato hh:mm:ss ");
        let fechaYHora = new Date(fecha + "T" + hora);
        const lugar = prompt("¿Donde desea que se lleve a acabo la cita? Indique una ciudad dentro de caracas ")
        const longitud = "52° 31' 28'' N";
        const latitud = "13° 24' 38'' E";
        const personaCitada = this;
        const historialMedicoDeLaCita: HistorialMedico[] = [];
        let newCita: CitaPresencial = new CitaPresencial("1", fechaYHora, EstadoCita.Agendado, personaCitada, historialMedicoDeLaCita, lugar, longitud, latitud);
        return newCita;
        
    };

    pedirCitaVirtual (): CitaVirtual {
        const fecha = prompt("¿Que dia desea agendar su cita? Utilice el formato aaaa-mm-dd ");
        const hora = prompt("¿A que hora desea que se realize la consulta? Utilice el formato hh:mm:ss ");
        let fechaYHora = new Date(fecha + "T" + hora);
        const url = "https://explore.zoom.us/es/products/meetings/";
        const personaCitada = this;
        const historialMedicoDeLaCita: HistorialMedico[] = [];
        let newCita: CitaVirtual = new CitaVirtual("1", fechaYHora, EstadoCita.Agendado, personaCitada, historialMedicoDeLaCita, url);
        return newCita;
    }

    consultarHistorialMedico(historialMedico: HistorialMedico): void{
        //Se consulta el historial medico del paciente
    };
}







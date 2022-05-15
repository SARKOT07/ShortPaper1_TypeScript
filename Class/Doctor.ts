import {Persona} from "./Persona"
import {Especialidad} from "./Especialidad"
import {HistorialMedico} from "./HistorialMedico"
import {Cita} from "./Cita"


export class Doctor extends Persona{

        private historialMedicoRealizado:HistorialMedico[];
        private citasAgendadas:Cita[];

    constructor (id:string,Nombre:string,Apellido:string,private especialidad:Especialidad[]){
        super(id,Nombre,Apellido)
        this.historialMedicoRealizado= [];
        this.citasAgendadas= [];
    }

    get _id():string{
        return this.id;
    }  
    get _Nombre():string{
        return this.Nombre;
    }  
    get _Apellido():string{
        return this.Apellido;
    }  
    get _especialidad():Especialidad[]{
        return this.especialidad;
    }  
    get _historialMedicoRealizado():HistorialMedico[]{
        return this.historialMedicoRealizado

    }
    get _citasAgendadas():Cita[]{
        return this.citasAgendadas
    }

    set _citasAgendadas(value:Cita[]){
        this.citasAgendadas=value;
    }
    
    set _historialMedicoRealizado(value:HistorialMedico[]){
        this.historialMedicoRealizado=value;
    }
    
    set _id(value:string){
        this.id=value;
    }
    set _Nombre(value:string){
        this.Nombre=value;
    }
    set _Apellido(value:string){
        this.Apellido=value;
    }
    set _especialidad(value:Especialidad[]){
        this.especialidad=value;
    }
    modificar(persona:Persona): void {
        
    }   ;
    consultar(persona:Persona): void {
        
    }   ;
    editarHistoriaMedica(historialMedico:HistorialMedico):HistorialMedico{
        return historialMedico;
    }   ;
    crearHistoriaMedica(historial:Cita)/*:HistorialMedico*/{
     
    }   ;
    agendarCita():void{
        //Se agenda la cita que estaba en proceso
    }   ;

}
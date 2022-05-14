import {Persona} from "./Persona"
import {Especialidad} from "./Especialidad"
import {HistorialMedico} from "./HistorialMedico"
import {Cita} from "./Cita"


export class Doctor extends Persona{
    
    constructor (id:string,Nombre:string,Apellido:string,private especialidad:Especialidad[], private historialMedicoRealizado?:HistorialMedico[], private citasAgendadas?:Cita[]){
        super(id,Nombre,Apellido)
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
        if (this.historialMedicoRealizado){
            return this.historialMedicoRealizado
        }
        else return []
    }
    get _citasAgendadas():Cita[]{
        if (this.citasAgendadas){
            return this.citasAgendadas
        }
        else return []

    }

    set _citasAgendadas(value:Cita[]){
        this.citasAgendadas=value;
    }
    
    set _historialMedicoRealizado(value:HistorialMedico[]){
        this.citasAgendadas=value;
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
    modificar(): void {
        
    }   ;
    consultar(): void {
        
    }   ;
    editarHistoriaMedica(historialMedico:HistorialMedico):HistorialMedico{

    }   ;
    crearHistoriaMedica(historial:Cita):HistorialMedico{

    }   ;
    agregarCita():void{

    }   ;

}
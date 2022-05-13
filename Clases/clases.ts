abstract class Persona{
    constructor (protected id :string,protected Nombre:string,protected Apellido:string){

    }
    abstract modificar():void;
    abstract consultar():void;

}

class Doctor extends Persona{
  
    constructor (id:string,Nombre:string,Apellido:string,private especialidad:Especialidad[]){
        super(id,Nombre,Apellido)
        this.especialidad= especialidad;
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
class Cita{

}
class Especialidad{


    constructor (private id: string,private nombre: string,private examenesRequeridos:ExamenMedicoTipo[]){

    }
    get _id():string{
        return this.id;
    }  
    get _nombre():string{
        return this.nombre;
    }
    get _examenesRequeridos():ExamenMedicoTipo[]{
        return this.examenesRequeridos;
    }
    set _id(value:string){
        this.id=value;
    }
    set _nombre(value:string){
        this.nombre=value;
    }
    set _examenesRequeridos(value:ExamenMedicoTipo[]){
        this.examenesRequeridos=value;
    }
}

class HistorialMedico{


}

class RangoDeValores{

}

class ExamenMedicoTipo{
    constructor (private id:string, private unidad:string, public nombre:string, private valoresPermitidos:RangoDeValores){

    }
    get _id():string{
        return this.id;
    }  
    get _unidad():string{
        return this.unidad;
    }  
    get _valoresPermitidos():RangoDeValores{
        return this.valoresPermitidos;
    }  
    set _id(value:string){
        this.id=value;
    }
    set _unidad(value:string){
        this.unidad=value;
    }
    set _valoresPermitidos(value:RangoDeValores){
        this.valoresPermitidos=value;
    }
}

class Admin{
      registrarPaciente():Paciente{

      }
      registrarDoctor():Doctor{
          let rango=new RangoDeValores();
          let examen_unico=new ExamenMedicoTipo('1','20','Emoglobina',rango)
          var lista_de_examenes=new Array();
          lista_de_examenes.push(examen_unico);
          let especialidad=new Especialidad('1','Pediatria',lista_de_examenes)
          var lista_de_especialidades=new Array();
          lista_de_especialidades.push(especialidad);
          let doctor=new Doctor('1','Diego','Cumares',lista_de_especialidades)
          return doctor;
      }

}

import {Doctor} from "./Doctor"
import {RangoDeValores} from "./RangoDeValores"
import {ExamenMedicoTipo} from "./ExamenMedicoTipo"
import {Especialidad} from "./Especialidad"
import {Paciente} from "./Paciente"

export class Admin{
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
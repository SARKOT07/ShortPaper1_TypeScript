import {Doctor} from "./Doctor"
import {RangoDeValores} from "./RangoDeValores"
import {ExamenMedicoTipo} from "./ExamenMedicoTipo"
import {Especialidad} from "./Especialidad"
import {Paciente} from "./Paciente"
import { Suscripcion } from "./Suscripcion"
import { Paypal } from "./paypal"
import { Modalidad } from "../Enumerations/Modalidad"
import { Estado } from "../Enumerations/Estado"
const prompt = require("prompt-sync")();



export class Admin{

    registrarPaciente():Paciente{

        const nombreQ = prompt("Cual es tu nombre? ");
        const apellidoQ = prompt("Cual es tu apellido? ");
        const fechaNQ = prompt("Cual es tu fecha de nacimiento? ");
        const profesionQ = prompt("Cual es tu profesion? ");
        const pesoQ = prompt("Cual es tu peso? ");
        const telefonoQ = prompt("Cual es tu telefono? ");
        const correoQ = prompt("Cual es tu correo electronico? ");
        let paypalNew = new Paypal('1','franco@gmail.com','123456');
        let suscripcionNew = new Suscripcion('1','2023-06-20',50,Modalidad.Anual,Estado.Activo,false,paypalNew);
        let pacienteNew = new Paciente('1',nombreQ,apellidoQ,fechaNQ,profesionQ,pesoQ,telefonoQ,correoQ,suscripcionNew);    
        return pacienteNew;
    };

    registrarDoctor():Doctor{
        let rango=new RangoDeValores(50,50);
        let examen_unico=new ExamenMedicoTipo('1','20','Emoglobina',rango)
        var lista_de_examenes=new Array();
        lista_de_examenes.push(examen_unico);
        let especialidad=new Especialidad('1','Pediatria')
        var lista_de_especialidades=new Array();
        lista_de_especialidades.push(especialidad);
        let doctor=new Doctor('1','Diego','Cumares',lista_de_especialidades)
        return doctor;
    }

}
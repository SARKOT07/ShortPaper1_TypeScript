import { EventoComportamiento } from "../Enumerations/EventoComportamiento";
import { Paciente } from "./Paciente";
import { Doctor } from "./Doctor";


export class ObservadorAuditar{


    constructor (private evento: EventoComportamiento){}

    //Getters
    public get Evento(): EventoComportamiento {
        return this.evento;
    }

    //Setters
    public set Evento(value: EventoComportamiento) {
        this.evento = value;
    }

    //methods
    guardar(): void{
        //Se guarda los datos importantes que se observo en los comportamientos
    };
    establecerDatos(eventoRealizado: EventoComportamiento, Paciente: Paciente, Doctor: Doctor): void{
        //Se establecen los datos importantes que se observo en los comportamientos
    };
}




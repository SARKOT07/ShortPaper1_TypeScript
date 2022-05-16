import { Admin } from "../Class/Admin";
import { Paciente } from "../Class/Paciente";

const prompt = require("prompt-sync")();

console.log("--- Bienvenido a la simulación sobre la app de Telemedicina --- \n")
const condicion = prompt("- ¿Desea registrar un paciente? [y/n] ");
  switch (condicion) {
    case "y":
      let admins = new Admin();
      let pacientes: Paciente;
      pacientes = admins.registrarPaciente();
      pacientes.consultar(pacientes);
      const condicion = prompt("- ¿Desea solicitar una cita? [y/n] ");
      switch (condicion) {
        case "y":
          const condicion = prompt("- ¿Cómo desea que desea que sea la modalidad de la cita? [Presencial (p), Virtual (v)] ");
          switch(condicion) {
            case "p":
              let citaSolicitadaP = pacientes.pedirCitaPresencial();
              citaSolicitadaP.consultarCita();
              break;
            case "v":
              let citaSolicitadaV = pacientes.pedirCitaVirtual();
              citaSolicitadaV.consultarCita();
              break;
            default:
              console.log(`¡Opción invalida!`);
              break;
          }
        case "n":
          console.log(`--- ¡Gracias por participar en la simulación! ---`);
          break;
        default:
          console.log(`¡Opción invalida!`);
          break;
      }
      break;
    case "n":
      console.log(`--- ¡Gracias por participar en la simulación! ---`);
      break;
    default:
      console.log(`¡Opción invalida!`);
      break;
  }







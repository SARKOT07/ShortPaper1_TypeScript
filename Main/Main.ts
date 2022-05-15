import { Admin } from "../Class/Admin";
import { Paciente } from "../Class/Paciente";
const prompt = require("prompt-sync")();

const condicion = prompt("Desea registrar un paciente? [y/n]");
  switch (condicion) {
    case "y":
      let admins = new Admin();
      let pacientes: Paciente;
      pacientes = admins.registrarPaciente();
      pacientes.consultar(pacientes);
      const condicion = prompt("CASODEUSOILIANA  [y/n]");
      switch (condicion) {
        case "y":

          break;
        case "n":
          console.log(`Sorry!x2 >:c`);
          break;
        default:
          console.log(`Invalido!x2 >:s`);
          break;
      }
      break;
    case "n":
      console.log(`Sorry! >:c`);
      break;
    default:
      console.log(`Invalido! >:s`);
      break;
  }







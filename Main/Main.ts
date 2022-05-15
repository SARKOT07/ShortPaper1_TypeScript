import { Admin } from "../Class/Admin";
import { Paciente } from "../Class/Paciente";
const prompt = require("prompt-sync")();

const condicion = prompt("Desea registrar un paciente? [y/n]");
  switch (condicion) {
    case "y":
      let admins = new Admin();
      let pacientes: Paciente;
      pacientes = admins.registrarPaciente();
      console.log(`Se ha registrado el Paciente con id ${pacientes._id}, Nombre: ${pacientes._Nombre}, Apellido: ${pacientes._Apellido}, Fecha de nacimiento: ${pacientes.FechaNacimiento}, Profesion: ${pacientes.Profesion}, Peso: ${pacientes.Peso}, Telefono: ${pacientes.Telefono} y correo electronico: ${pacientes.CorreoElectronico}`)
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







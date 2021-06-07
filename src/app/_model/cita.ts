import { Especialidad } from "./especialidad";
import { Paciente } from "./paciente";
import { Doctor } from "./doctor";

export class Cita {
    id?: number;
    fecCita?: any;
    paciente?: Paciente;
    doctor?: Doctor;
    especialidad?: Especialidad;
    horCita?: any;
    mtoCita?: number;
    indCancelado?: boolean;
  }
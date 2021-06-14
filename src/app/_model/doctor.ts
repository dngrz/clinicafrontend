import { Especialidad } from "./especialidad";

export class Doctor {
    id?: number;
    numDni?: string;
    desEmail?: string;
    nomCompleto?: string;
    numColegiatura?: string;
    estudios?: string;
    fecIngreso?: any;
    especialidad: Especialidad;
    
  }
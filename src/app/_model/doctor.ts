import { Especialidad } from "./especialidad";

export class Doctor {
    id?: number;
    numDni?: string;
    desApellidop?: string;
    desApellidom?: string;
    desNombre?: string;
    desEmail?: string;
    desDireccion?: string;
    fecIngreso?: any;
    codEspecialidad?: Especialidad[];
    
  }
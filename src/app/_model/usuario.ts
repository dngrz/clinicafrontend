import { Paciente } from "./paciente";
import { Doctor } from "./doctor";

export class Usuario {
    id?: number;
    usuario?: string;
    clave?: string;
    perfil?: string;
    fecIngreso?: any;
    nombreCompleto?: string;
    paciente?: Paciente;
    doctor?: Doctor;
}
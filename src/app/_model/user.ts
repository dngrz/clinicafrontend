export type Roles = 'ADMIN'|'DOCTOR'|'SECRETARIA'|'PACIENTE';

export interface User {
    usuario: string;
    password: string;
}

export interface UserResponse {
    message: string;
    token: string;
    userId: string;
    rol: Roles;
}
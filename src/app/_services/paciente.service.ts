import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from 'app/_model/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Paciente[]>{
    return this.http.get<Paciente[]>("http://localhost:8080/pacientes");
  }
}

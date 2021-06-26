import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resultado } from 'app/_model/resultado';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { Especialidad } from 'app/_model/especialidad';
import { Doctor } from 'app/_model/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Doctor[]>{
    return this.http.get<Doctor[]>("http://localhost:8080/doctores");
  }

  obtener(id:number): Observable<Doctor>{
    return this.http.get<Doctor>("http://localhost:8080/doctores/"+id);
  }

  create(doctor: Doctor): Observable<Doctor> {
    let copy: Doctor = Object.assign({}, doctor);
    return this.http.post<Doctor>("http://localhost:8080/doctores", copy);
  }

  update(doctor: Doctor): Observable<Doctor> {
    let copy: Doctor = Object.assign({}, doctor);
    return this.http.put<Doctor>("http://localhost:8080/doctores", copy);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resultado } from 'app/_model/resultado';
import { Observable } from 'rxjs';
import { Especialidad } from 'app/_model/especialidad';
import { Doctor } from 'app/_model/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Doctor[]>{
    return this.http.get<Doctor[]>("http://localhost:8080/doctores");
    //console.log(contribuyente);
    //return this.http.get<Contribuyente>(ConstantesUris.URI_CONSULTA_CONTRIBUYENTE + numRuc);
    //return of(contribuyente);
}
}

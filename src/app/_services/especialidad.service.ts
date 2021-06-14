import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resultado } from 'app/_model/resultado';
import { Observable } from 'rxjs';
import { Especialidad } from 'app/_model/especialidad';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Especialidad[]>{
    return this.http.get<Especialidad[]>("http://localhost:8080/especialidades");
    //console.log(contribuyente);
    //return this.http.get<Contribuyente>(ConstantesUris.URI_CONSULTA_CONTRIBUYENTE + numRuc);
    //return of(contribuyente);
}
}

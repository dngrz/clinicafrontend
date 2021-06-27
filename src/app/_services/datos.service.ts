import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Resultado } from 'app/_model/resultado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<Resultado>{
    return this.http.get<Resultado>("http://localhost:8080/datos");
  }
}

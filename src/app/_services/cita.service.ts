import { Injectable } from '@angular/core';
import { Cita } from 'app/_model/cita';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CitaService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Cita[]>{
    return this.http.get<Cita[]>("http://localhost:8080/citas");
  }

  obtener(id:number): Observable<Cita>{
    return this.http.get<Cita>("http://localhost:8080/citas/"+id);
  }

  create(cita: Cita): Observable<Cita> {
    let copy: Cita = Object.assign({}, cita);
    return this.http.post<Cita>("http://localhost:8080/citas", copy);
  }

  update(cita: Cita): Observable<Cita> {
    let copy: Cita = Object.assign({}, cita);
    return this.http.put<Cita>("http://localhost:8080/citas", copy);
  }
}

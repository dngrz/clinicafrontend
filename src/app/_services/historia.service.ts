import { Injectable } from '@angular/core';
import { Historia } from 'app/_model/historia';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HistoriaService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Historia[]>{
    return this.http.get<Historia[]>("http://localhost:8080/historias");
  }

  obtenerPorPaciente(id: number): Observable<Historia[]>{
    return this.http.get<Historia[]>("http://localhost:8080/historias/paciente/"+id);
  }

  obtener(id:number): Observable<Historia>{
    return this.http.get<Historia>("http://localhost:8080/historias/"+id);
  }

  create(historia: Historia): Observable<Historia> {
    let copy: Historia = Object.assign({}, historia);
    return this.http.post<Historia>("http://localhost:8080/historias", copy);
  }

  update(historia: Historia): Observable<Historia> {
    let copy: Historia = Object.assign({}, historia);
    return this.http.put<Historia>("http://localhost:8080/historias", copy);
  }
}

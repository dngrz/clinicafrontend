import { Injectable } from '@angular/core';
import { Usuario } from 'app/_model/usuario';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  listar(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>("http://localhost:8080/usuarios");
  }

  obtener(id:number): Observable<Usuario>{
    return this.http.get<Usuario>("http://localhost:8080/usuarios/"+id);
  }

  obtenerPorUsuario(usuario:string): Observable<Usuario>{
    return this.http.get<Usuario>("http://localhost:8080/usuarios/usuario/"+usuario);
  }
}

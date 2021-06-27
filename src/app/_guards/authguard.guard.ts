import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from 'app/_model/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

  usuario: Usuario;

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      this.usuario = JSON.parse(sessionStorage.getItem("CLINICA.usuario"));
      if (this.usuario) {
        let perfil: string = this.usuario.perfil;
        if (perfil) {
            let indAcceso: boolean = this.validateAccesoPerfil(perfil, state.url);
            console.log("indAcceso",indAcceso);
            if (!indAcceso){
                this.router.navigate(["/user-profile"]);
                return false;
            } else {
                return true; 
            }
        }
        return true;
    }

    // not logged in so redirect to login page
    this.router.navigate(['/login']);
    return true;
  }

  validateAccesoPerfil(perfil: string, itemMenu: string) : boolean {
    let indValido: boolean = false;
    switch (perfil){
      case "DOCTOR":
          switch (itemMenu) {
            case "/user-profile" : indValido = true;
              break;
            case "/especialidades" : indValido = true;
              break;
          }
          if(itemMenu.indexOf("/citas") >= 0) {
            indValido = true;
          }
          if(itemMenu.indexOf("/historia") >= 0) {
            indValido = true;
          }
          break;
      case "SECRETARIA":
          switch (itemMenu) {
            case "/dashboard" : indValido = true;
              break;
            case "/user-profile" : indValido = true;
              break;
            case "/especialidades" : indValido = true;
              break;
          }
          if(itemMenu.indexOf("/historia") >= 0) {
            indValido = true;
          }
          if(itemMenu.indexOf("/doctores") >= 0) {
            indValido = true;
          }
          if(itemMenu.indexOf("/citas") >= 0) {
            indValido = true;
          }
          break;
      case "PACIENTE":
          switch (itemMenu) {
            case "/dashboard" : indValido = false;
              break;
            case "/user-profile" : indValido = true;
              break;
            case "/doctores" : indValido = false;
              break;
            case "/especialidades" : indValido = true;
              break;
          }
          if(itemMenu.indexOf("/citas") >= 0) {
            indValido = true;
          }
          break;
    }
    console.log(perfil, itemMenu);
    
    if(!indValido) {
      alert("ERROR DE ACCESO: UD. No cuenta con Acceso a la Opción Selecionada")
    }

    return indValido;
  }

}

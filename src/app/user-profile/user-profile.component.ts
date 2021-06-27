import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DatosService } from 'app/_services/datos.service';
import { Usuario } from 'app/_model/usuario';
import { UsuariosService } from 'app/_services/usuarios.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, AfterViewInit {

  usuario: Usuario = new Usuario();

  constructor(private datosService:DatosService, private usuariosService: UsuariosService) { }

  ngOnInit() {
    this.datosService.obtenerDatos().subscribe (data => {
      if (data){
        console.log(data);
      }
    });
  }

  ngAfterViewInit(){
    setTimeout( () => {
      this.usuario = JSON.parse(sessionStorage.getItem("CLINICA.usuario"));
    },500);
    console.log(this.usuario.perfil);
  }
  

}

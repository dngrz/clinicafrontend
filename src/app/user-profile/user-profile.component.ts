import { Component, OnInit } from '@angular/core';
import { DatosService } from 'app/_services/datos.service';
import { Usuario } from 'app/_model/usuario';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

    usuario: Usuario;

  constructor(private datosService:DatosService) { }

  ngOnInit() {
    this.datosService.obtenerDatos().subscribe (data => {
      if (data){
        console.log(data);
      }

      //this.usuario = sessionStorage.getItem("CLINICA.usuario");

    });
  }

}

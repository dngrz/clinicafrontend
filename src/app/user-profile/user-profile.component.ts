import { Component, OnInit } from '@angular/core';
import { DatosService } from 'app/_services/datos.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  usuario: any;

  constructor(private datosService:DatosService) { }

  ngOnInit() {
    this.datosService.obtenerDatos().subscribe (data => {
      if (data){
        console.log(data);
      }

      this.usuario = sessionStorage.getItem("CLINICA.usuario");
      
    });
  }

}

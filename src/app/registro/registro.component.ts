import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'app/_model/user';
import { UsuariosService } from 'app/_services/usuarios.service';
import { DatosService } from 'app/_services/datos.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

 usuarioData: User;

 loginForm = this.fb.group({
   username: [''],
   password: ['']
 })

  constructor(private router: Router, private fb: FormBuilder, private usuariosService: UsuariosService, private datosService:DatosService) { }

  ngOnInit(): void {
    sessionStorage.removeItem("CLINICA.usuario")
    this.datosService.obtenerDatos().subscribe (data => {
      if (data){
        console.log(data);
      }
    });
  }

  onLogin(): void{

    const formValue = this.loginForm.value;

    console.log(formValue);
    let usuarioLog = {
      user : formValue["username"],
      rol: "ADMIN",
      nombreCompleto: "Ruiz Vargas, Paul"
    }

    this.usuariosService.obtenerPorUsuario(formValue["username"]).subscribe(data => {
      if (data){
        if(data.clave===formValue["password"]) {
          sessionStorage.setItem('CLINICA.usuario',JSON.stringify(data));
          this.router.navigate(['/user-profile']);
        } else {
          alert("ERROR CLAVE INCORRECTA")
        }
        
      } else {
        alert("ERROR NO EXISTE EL USUARIO")
      }
    });
    

  }

}

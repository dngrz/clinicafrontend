import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'app/_model/user';

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

  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
    
    
  }

  onLogin(): void{

    const formValue = this.loginForm.value;

    console.log(formValue);
    let usuarioLog = {
      user : formValue["username"],
      rol: "ADMIN",
      nombreCompleto: "Ruiz Vargas, Paul"
    }

    sessionStorage.setItem('CLINICA.usuario',JSON.stringify(usuarioLog));

    this.router.navigate(['/user-profile']);

  }

}

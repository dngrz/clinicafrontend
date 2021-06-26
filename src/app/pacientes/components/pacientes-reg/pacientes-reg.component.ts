import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pacientes-reg',
  templateUrl: './pacientes-reg.component.html',
  styleUrls: ['./pacientes-reg.component.css']
})
export class PacientesRegComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  save() : void {
    console.log("grabando")
    this.router.navigate(['/pacientes']);
  }

}

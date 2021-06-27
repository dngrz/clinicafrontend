import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Paciente } from 'app/_model/paciente';
import { Subscription } from 'rxjs';
import { PacienteService } from 'app/_services/paciente.service';

@Component({
  selector: 'app-pacientes-reg',
  templateUrl: './pacientes-reg.component.html',
  styleUrls: ['./pacientes-reg.component.css']
})
export class PacientesRegComponent implements OnInit, AfterViewInit {

  paciente: Paciente = new Paciente();
  idPaciente: number;
  sub : Subscription;
  isNew : boolean = true;

  constructor(private route: ActivatedRoute, private router: Router, private pacienteService: PacienteService) { }

  ngOnInit(): void {
    this.sub = this.route.queryParams.subscribe(params => {
      console.log("params",params);
      this.idPaciente = params['page'].split("_")[0] || 0;
      setTimeout( () => {
        if (this.idPaciente != 0){
          this.pacienteService.obtener(this.idPaciente).subscribe(data => {
            this.paciente = data;
          });  
        }
      }, 500);
      console.log("parametro obtenido",this.idPaciente);
    });
  }
  
  ngAfterViewInit(): void {
    if(this.idPaciente != 0) this.isNew = false;
  }

  save() : void {
    this.prepareToSave();
    this.previousState();
  }

  previousState(): void {
    this.router.navigate(['/pacientes']);
  }

  prepareToSave(): void {
    
    if (this.isNew) {
        this.pacienteService.create(this.paciente)
        .subscribe(data => {
          console.log("Entro al Success Create");
          if (data){
            this.onSaveSuccess(data)
          } 
        },error => {
          console.log("Error en Grabación",JSON.parse(error._body));
          alert(JSON.parse(error._body).message);
        });
    } else {
        this.pacienteService.update(this.paciente)
            .subscribe((res : Paciente) => this.onSaveSuccess(res),(res : Response) => this.onSaveError(res));
    }

  }

  private onSaveSuccess (result: Paciente) {
    this.previousState();
    console.log("OK",result);
  }

  private onSaveError (error) {
    console.log("Error",error);
    //this.onError(error);
  }
}

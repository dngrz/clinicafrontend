import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Paciente } from 'app/_model/paciente';
import { PacienteService } from 'app/_services/paciente.service';
import { HistoriaService } from 'app/_services/historia.service';
import { Historia } from 'app/_model/historia';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-historia-reg',
  templateUrl: './historia-reg.component.html',
  styleUrls: ['./historia-reg.component.css']
})
export class HistoriaRegComponent implements OnInit, AfterViewInit {

  pacienteSel: Paciente = new Paciente();
  pacientes: Paciente [] = [];
  historia: Historia = new Historia();
  idHistoria: number;
  sub : Subscription;
  isNew : boolean = true;

  constructor(private route: ActivatedRoute, private router: Router, private pacienteService: PacienteService, private historiaService: HistoriaService) { }

  ngOnInit(): void {
    this.sub = this.route.queryParams.subscribe(params => {
      console.log("params",params);
      this.idHistoria = params['page'].split("_")[0] || 0;
      this.pacienteService.listar().subscribe(data => {
        if (data){
          console.log(data);
          this.pacientes = data;
          this.pacienteSel = this.pacientes[0];
        }
      });

      setTimeout( () => {
        if (this.idHistoria != 0){
          this.historiaService.obtener(this.idHistoria).subscribe(data => {
            this.historia = data;
          });  
        }
      }, 500);
      console.log("parametro obtenido",this.idHistoria);
    });
  }
  
  ngAfterViewInit(): void {
    if(this.idHistoria != 0) this.isNew = false;
  }

  onChangeSelect(newObj: any): void {
    let selectedObj = JSON.parse(newObj);
    this.pacienteSel = selectedObj
    console.log(this.pacienteSel);
  }


  save() : void {
    this.prepareToSave();
    this.previousState();
  }

  previousState(): void {
    this.router.navigate(['/historia']);
  }

  prepareToSave(): void {
    
    if (this.isNew) {
        this.historia.paciente=this.pacienteSel;
        this.historiaService.create(this.historia)
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
        this.historiaService.update(this.historia)
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

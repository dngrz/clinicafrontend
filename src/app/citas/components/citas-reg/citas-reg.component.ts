import { Component, OnInit } from '@angular/core';
import { Cita } from 'app/_model/cita';
import { Paciente } from 'app/_model/paciente';
import { Doctor } from 'app/_model/doctor';
import { DoctorService } from 'app/_services/doctor.service';
import { PacienteService } from 'app/_services/paciente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CitaService } from 'app/_services/cita.service';

@Component({
  selector: 'app-citas-reg',
  templateUrl: './citas-reg.component.html',
  styleUrls: ['./citas-reg.component.css']
})
export class CitasRegComponent implements OnInit {

  isNew: boolean = true;
  cita: Cita = new Cita();
  doctorSel: Doctor = new Doctor();
  pacienteSel: Paciente = new Paciente();

  doctores : Doctor[] = [];
  pacientes: Paciente[] = [];

  idCita: number;

  sub: Subscription;

  constructor(private doctorService: DoctorService,
    private pacienteService: PacienteService, 
    private citaService: CitaService,
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cita.mtoCita=150.00;
    this.cita.indCancelado=false;

    this.sub = this.route.queryParams.subscribe(params => {
      console.log("params",params);
      this.idCita = params['page'].split("_")[0] || 0;

      this.doctorService.listar().subscribe( data => {
        if(data){
          this.doctores = data;
        }
      });
      this.pacienteService.listar().subscribe(data => {
        if(data) {
          this.pacientes = data;
        }
      });

      setTimeout( () => {
        if (this.idCita != 0){
          this.citaService.obtener(this.idCita).subscribe(data => {
            this.cita = data;
            this.pacienteSel = this.cita.paciente;
            this.doctorSel = this.cita.doctor;
          });
        }
    
      }, 500);
      console.log("parametro obtenido",this.idCita);
    });


  }

  onChangeSelectDoc(newObj: any): void {
    let selectedObj = JSON.parse(newObj);
    this.doctorSel = selectedObj
    console.log(this.doctorSel);
  }

  onChangeSelectPac(newObj: any): void {
    let selectedObj = JSON.parse(newObj);
    this.pacienteSel = selectedObj
    console.log(this.pacienteSel);
  }

  


  save() : void {
    this.prepareToSave();
    this.previousState();
  }

  previousState(): void {
    this.router.navigate(['/citas']);
  }

  prepareToSave(): void {
    
    if (this.isNew) {
        this.cita.paciente=this.pacienteSel;
        this.cita.doctor=this.doctorSel;
        this.cita.especialidad=this.doctorSel.especialidad;
        this.citaService.create(this.cita)
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
        this.citaService.update(this.cita)
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

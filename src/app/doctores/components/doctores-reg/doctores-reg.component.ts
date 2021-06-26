import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Especialidad } from 'app/_model/especialidad';
import { EspecialidadService } from 'app/_services/especialidad.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DoctorService } from 'app/_services/doctor.service';
import { Subscription } from 'rxjs';
import { Doctor } from 'app/_model/doctor';

@Component({
  selector: 'app-doctores-reg',
  templateUrl: './doctores-reg.component.html',
  styleUrls: ['./doctores-reg.component.css']
})
export class DoctoresRegComponent implements OnInit, AfterViewInit {

  sub : Subscription;
  isNew : boolean = true;
  especialidadSel: Especialidad = new Especialidad();
  especialidades : Especialidad []
  idDoctor: number;
  doctor: Doctor = new Doctor();

  constructor(private route: ActivatedRoute, private router: Router, private especialidadesService: EspecialidadService, private doctoresService: DoctorService) { }

  ngOnInit(): void {
    this.sub = this.route.queryParams.subscribe(params => {
      console.log("params",params);
      this.idDoctor = params['page'].split("_")[0] || 0;
      setTimeout( () => {
        if (this.idDoctor != 0){
          this.doctoresService.obtener(this.idDoctor).subscribe(data => {
            //console.log(data);
            this.doctor = data;
            this.especialidadSel = this.doctor.especialidad;
          });  
        }
      }, 500);
      console.log("parametro obtenido",this.idDoctor);
    });

    this.especialidadesService.listar().subscribe( data => {
      if (data) {
        this.especialidades = data;
      }
    });

  }

  ngAfterViewInit(){
    if(this.idDoctor != 0) this.isNew = false;
  }

  onChangeSelect(newObj: any) {
    let selectedObj = JSON.parse(newObj);
    //this.isChoosing = true;
    this.especialidadSel = selectedObj
    // this.initSubSeccionSelect();
    this.doctor.especialidad = this.especialidadSel;
    console.log(this.doctor);
  }

  save() : void {
    this.prepareToSave();
    this.previousState();
  }

  previousState(): void {
    //window.history.back();
    this.router.navigate(['/doctores']);
  }

  prepareToSave(): void {
    
      if (this.isNew) {
          this.doctoresService.create(this.doctor)
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
          this.doctoresService.update(this.doctor)
              .subscribe((res : Doctor) => this.onSaveSuccess(res),(res : Response) => this.onSaveError(res));
      }
    //}

  }

  private onSaveSuccess (result: Doctor) {
    // this.$sessionStorage.store('currentSeccionSel', this.seccionSel );
    // this.$sessionStorage.store('currentSubSeccionSel', this.subseccionSel );
    //this.$sessionStorage.store('currentTemaSaved', result );
    this.previousState();
    console.log("OK",result);
  }

  private onSaveError (error) {
    console.log("Error",error);
    //this.onError(error);
  }

}

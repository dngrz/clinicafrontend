import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Cita } from 'app/_model/cita';
import { Router } from '@angular/router';
import { CitaService } from 'app/_services/cita.service';
import { DoctorService } from 'app/_services/doctor.service';
import { EspecialidadService } from 'app/_services/especialidad.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent implements OnInit {

  settings = {
    mode: 'external',
    actions: {
      columnTitle: 'Acciones',
      add: true,
      edit: true,
      delete: true,
      position: 'left'
    },
    noDataMessage: 'No hay registros',
    add: {
      addButtonContent: '<i class="fa fa-plus-square fa-2x"  title="Agregar Nuevo"></i>',
    },
    edit: {
      editButtonContent: '<i class="fa fa-pencil fa-2x"  title="Editar"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="fa fa-trash fa-2x"  title="Eliminar"></i>',
      confirmDelete: true
    },
    pager: {
      display: true,
      perPage: 10
    },
    columns: {
      id: {
        title: '#',
        type: 'number',
      },
      fecCita: {
        title: 'Fecha',
        type: 'string'
      },
      horCita: {
        title: 'Hora',
        type: 'string'
      },
      paciente: {
        title: 'Paciente',
        type: 'string'
      },
      especialidad: {
        title: 'Especialidad',
        type: 'string'
      },
      doctor: {
        title: 'Doctor',
        type: 'string'
      },
      indCancelado: {
        title: 'Cancelado',
        type: 'string'
      },
      mtoCita: {
        title: 'Monto',
        type: 'number'
      },
    }
  };

  source: LocalDataSource = new LocalDataSource();
  data: Cita[];

  constructor(private router:Router, 
    private citaService: CitaService, 
    private doctorService: DoctorService, 
    private especialidadService: EspecialidadService, private datePipe: DatePipe) { }

  ngOnInit(): void {

    this.showInSmartTable();
  }

  showInSmartTable(): void {

    this.citaService.listar().subscribe(data => {
      if(data) {
        console.log(data);
        this.data = data;
        let regToShow : {
           id:number,
           fecCita: number,
           horCita: string,
           paciente: string,
           especialidad: string,
           doctor: string,
           indCancelado: string, 
           mtoCita: number } [] = [];

        for (var i = 0; i < data.length; i++) {
            let rowData: any;
            rowData = {
              id: data[i].id,
              fecCita: this.datePipe.transform(data[i].fecCita,'yyyy-MM-dd'),
              horCita: data[i].horCita,
              paciente: data[i].paciente.nomCompleto,
              especialidad: data[i].especialidad.nomEspecialidad,
              doctor: data[i].doctor.nomCompleto,
              indCancelado: (data[i].indCancelado) ? "SI": "NO",
              mtoCita: data[i].mtoCita}
  
            regToShow.push(rowData);
          }
          this.source.load(regToShow);
      }

    });

  }

  onEdit(event): void {
    // this.$sessionStorage.store('currentValueSelect', this.agenda );
    // this.localPage = this.source.getPaging();
    // this.$sessionStorage.store('currentPageSelect', this.localPage );
    // //console.log(this.localPage)
    // this.router.navigate(['/pages/tema-agenda/edit'],{ queryParams: { page: event.data.id+"_"+this.agenda.codAgenda } });
    this.router.navigate(['/citas/edit'],{ queryParams: { page: event.data.id } });
  }

  onDelete(event): void {
    // if (window.confirm('Está seguro que desea eliminar la agenda seleccionada?')) {
    //   this.temaAgendaService.delete(event.data.id).subscribe(res => {
    //     this.source.remove(event.data);
    //   });
    // }
  }

  onAdd(event): void {
    // if (this.agenda.indPublicado) {
    //   alert("No se puede agregar tema nuevo en agenda publicada. Elegir la opción Control de Sesión")
    //   return;
    // }
    //   console.log("Se agregará",event);
    //   this.$sessionStorage.store('currentValueSelect', this.agenda );
    //   //
    //   this.localPage = this.source.getPaging();
    //   this.$sessionStorage.store('currentPageSelect', this.localPage );
    //   //
    //   this.router.navigate(['/pages/tema-agenda/edit'],{ queryParams: { page: 0+"_"+this.agenda.codAgenda } });
    this.router.navigate(['/citas/new'],{ queryParams: { page: 0 } });
  }

  onChangeAgenda(newObj: any) {
    // let selectedObj = JSON.parse(newObj);
    // this.agenda = selectedObj;
    // this.retrieveTemasAgenda();
    console.log("onChangeAgenda");
  }

  onUserRowSelect (evt: any) {
    console.log("onUserRowSelect",evt);
    // this.temaAgendaSel.codTema = evt["data"]["id"];
    // this.temaAgendaSel.numTema = evt["data"]["numTema"];

  }

  onRowSelect(evt: any){
    console.log("onRowSelect",evt);
    // this.temaAgendaSel.codTema = evt["data"]["id"];
    // this.temaAgendaSel.numTema = evt["data"]["numTema"];
    // this.rowDataSel = evt["data"];
  }


}


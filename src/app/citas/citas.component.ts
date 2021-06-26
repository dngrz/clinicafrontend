import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Cita } from 'app/_model/cita';
import { Router } from '@angular/router';

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
        type: 'boolean'
      },
      mtoCita: {
        title: 'Monto',
        type: 'boolean'
      },
    }
  };

  source: LocalDataSource = new LocalDataSource();
  data: Cita[];

  constructor(private router:Router) { }

  ngOnInit(): void {

    this.showInSmartTable();
  }

  showInSmartTable(): void {

    let regToShow : {
        id:number,
        fecCita: number,
        horCita: string,
        paciente: string,
        especialidad: string,
        doctor: string,
        indCancelado: boolean, 
        mtoCita: number } [] = [];

    // for (var i = 0; i < this.temas.length; i++) {
    //   let rowData: any;
    //   rowData = {id: this.temas[i].codTema,
    //      numTema: this.temas[i].numTema,
    //      seccion: this.temas[i].desSec,
    //      subSeccion: this.temas[i].desSubSec,
    //      comisiones: this.temas[i].desComisiones,
    //      desTema: '<strong>'+this.temas[i].numTema+'. '+this.temas[i].nomTemaCor+'</strong>&nbsp;'+this.temas[i].desResumen
    //    }
    //    regToShow.push(rowData);
    // }
    // this.source.load(regToShow);
    let data: CitaRow[] = [
      {id:1,  fecCita:"2021-06-01", horCita:"08:00", paciente: "aaaaaaaa bbbbb cccc", especialidad: "especialidad 1", doctor: "Carlitos", indCancelado: true, mtoCita: 180.00},
      {id:2,  fecCita:"2021-06-01", horCita:"08:00", paciente: "aaaaaaaa bbbbb dddd", especialidad: "especialidad 2", doctor: "Paul", indCancelado: true, mtoCita: 190.00},
      {id:3,  fecCita:"2021-06-01", horCita:"08:00", paciente: "aaaaaaaa bbbbb gggg", especialidad: "especialidad 3", doctor: "Victor", indCancelado: true, mtoCita: 200.00},
      {id:4,  fecCita:"2021-06-01", horCita:"08:00", paciente: "aaaaaaaa bbbbb uuuu", especialidad: "especialidad 4", doctor: "Carlitos", indCancelado: true, mtoCita: 210.00},
      {id:5,  fecCita:"2021-06-01", horCita:"08:00", paciente: "aaaaaaaa bbbbb vvvv", especialidad: "especialidad 5", doctor: "Victor", indCancelado: false, mtoCita: 220.00},
      {id:6,  fecCita:"2021-06-01", horCita:"08:00", paciente: "aaaaaaaa bbbbb eeee", especialidad: "especialidad 6", doctor: "Jhon", indCancelado: false, mtoCita: 230.00},
    ]
    this.source.load(data);

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

export interface CitaRow {
    id:number,
    fecCita?: any,
    horCita?: any,
    paciente: string,
    especialidad: string,
    doctor: string,
    indCancelado: boolean, 
    mtoCita: number
}
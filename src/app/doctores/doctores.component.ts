import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Doctor } from 'app/_model/doctor';
import { DoctorService } from 'app/_services/doctor.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctores',
  templateUrl: './doctores.component.html',
  styleUrls: ['./doctores.component.css']
})
export class DoctoresComponent implements OnInit {

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
      perPage: 30
    },
    columns: {
      id: {
        title: '#',
        type: 'number',
      },
      numDni: {
        title: 'Nº DNI',
        type: 'string',
      },
      nomCompleto: {
        title: 'Nombre Completo',
        type: 'string',
      },
      desEmail: {
        title: 'Email',
        type: 'string'
      },
      fecIngreso:{
        title: 'Fecha de Ingreso',
        type: 'string',
      },
      numColegiatura:{
        title: 'Colegiatura',
        type: 'string',
      },
      estudios:{
        title: 'Estudios',
        type: 'string',
      },
      especialidad:{
        title: 'Especialidad',
        type: 'string',
      },
    }
  };

  source: LocalDataSource = new LocalDataSource();
  data: Doctor[];

  constructor(private doctorService: DoctorService, private datePipe: DatePipe, private router: Router) { }

  ngOnInit(): void {

    this.showInSmartTable();
  }

  showInSmartTable(): void {

    this.doctorService.listar().subscribe( data => {
      if (data){
        let regToShow : {
          id: number;
          numDni: string;
          nomCompleto: string;
          desEmail: string;
          fecIngreso:string;
          numColegiatura:string;
          estudios:string;
          especialidad:string } [] = [];

        for (var i = 0; i < data.length; i++) {
          let rowData: any;
          rowData = {
            id: data[i].id,
            numDni: data[i].numDni,
            nomCompleto: data[i].nomCompleto,
            desEmail: data[i].desEmail,
            fecIngreso: this.datePipe.transform(data[i].fecIngreso,'yyyy-MM-dd'),
            numColegiatura:data[i].numColegiatura,
            estudios:data[i].estudios,
            especialidad:data[i].especialidad.nomEspecialidad }

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
    this.router.navigate(['/doctores/edit'], { queryParams: { page: event.data.id } });
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
    this.router.navigate(['/doctores/new'], { queryParams: { page: "0" } });
  }

  onChangeAgenda(newObj: any) {
    // let selectedObj = JSON.parse(newObj);
    // this.agenda = selectedObj;
    // this.retrieveTemasAgenda();
    console.log("onChange");
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

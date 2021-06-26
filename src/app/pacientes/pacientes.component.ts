import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Paciente } from 'app/_model/paciente';
import { PacienteService } from 'app/_services/paciente.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit {

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
      correo: {
        title: 'Email',
        type: 'string'
      },
      numTelefono: {
        title: 'Teléfono',
        type: 'string'
      },
      direccion: {
        title: 'Dirección',
        type: 'string'
      },
      edad: {
        title: 'Edad',
        type: 'number'
      },
      fecNacimiento:{
        title: 'Fecha de Nacimiento',
        type: 'string',
      },
      fecIngreso:{
        title: 'Fecha de Ingreso',
        type: 'string',
      },
    }
  };

  source: LocalDataSource = new LocalDataSource();
  data: Paciente[];

  constructor(private router: Router, private pacienteService: PacienteService, private datePipe: DatePipe) { }

  ngOnInit(): void {

    this.showInSmartTable();
  }

  showInSmartTable(): void {

    this.pacienteService.listar().subscribe( data => {
      if (data){
        let regToShow : {
          id: number;
          numDni: string;
          nomCompleto: string;
          correo: string;
          numTelefono: string;
          fecNacimiento: string;
          fecIngreso: string;
          direccion: string;
          edad: number } [] = [];

        for (var i = 0; i < data.length; i++) {
          let rowData: any;
          rowData = {
            id: data[i].id,
            numDni: data[i].numDni,
            nomCompleto: data[i].nomCompleto,
            correo: data[i].correo,
            fecIngreso: this.datePipe.transform(data[i].fecIngreso,'yyyy-MM-dd'),
            fecNacimiento: this.datePipe.transform(data[i].fecNacimiento,'yyyy-MM-dd'),
            numTelefono: data[i].numTelefono,
            direccion: data[i].direccion,
            edad: data[i].edad }

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
    this.router.navigate(['/pacientes/edit'],{ queryParams: { page: event.data.id+"_"+"codigo" } });
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
    //this.router.navigate(['/pacientes/new'],{ queryParams: { page: event.data.id+"_"+"codigo" } });
    this.router.navigate(['/pacientes/new'],{ queryParams: { page: "0"+"_"+"codigo" } });
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

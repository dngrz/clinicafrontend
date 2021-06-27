import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'app/_services/paciente.service';
import { Paciente } from 'app/_model/paciente';
import { LocalDataSource } from 'ng2-smart-table';
import { HistoriaService } from 'app/_services/historia.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})

export class HistoriaComponent implements OnInit {
  
  pacienteSel: Paciente = new Paciente();
  pacientes: Paciente[] = [];

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
      fecha: {
        title: 'fecha',
        type: 'string'
      },
      observaciones: {
        title: 'Observaciones',
        type: 'string'
      }
    }
  };
  
  source: LocalDataSource = new LocalDataSource();
  data: Paciente[];

  constructor(private router: Router, private pacienteService: PacienteService, private historiaService: HistoriaService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.pacienteService.listar().subscribe(data => {
      if (data){
        this.pacientes = data;
        this.pacienteSel = this.pacientes[0];
        if(this.pacienteSel != null){
          this.showInSmartTable(this.pacienteSel.id);
        }
      }
    });
  }

  onChangeSelect(newObj: any): void {
    let selectedObj = JSON.parse(newObj);
    this.pacienteSel = selectedObj
    //console.log("onChangeSelect", this.pacienteSel);
    this.showInSmartTable(this.pacienteSel.id);
  }


  showInSmartTable(idPaciente: number): void {

    this.historiaService.obtenerPorPaciente(idPaciente).subscribe( data => {
      if (data){
        let regToShow : {
          id: number;
          numDni: string;
          nomCompleto: string;
          fecha: string;
          observaciones: string;
        } [] = [];

        for (var i = 0; i < data.length; i++) {
          let rowData: any;
          rowData = {
            id: data[i].id,
            numDni: data[i].paciente.numDni,
            nomCompleto: data[i].paciente.nomCompleto,
            fecha: this.datePipe.transform(data[i].fecha,'yyyy-MM-dd'),
            observaciones: data[i].observaciones
          }
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
    this.router.navigate(['/historia/edit'], { queryParams: { page: event.data.id } });
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
    this.router.navigate(['/historia/new'], { queryParams: { page: "0" } });
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

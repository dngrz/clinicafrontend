import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Especialidad } from 'app/_model/especialidad';

@Component({
  selector: 'app-especialidades',
  templateUrl: './especialidades.component.html',
  styleUrls: ['./especialidades.component.css']
})
export class EspecialidadesComponent implements OnInit {

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
      desEspecialidad: {
        title: 'Especialidad',
        type: 'string'
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();
  data: Especialidad[];

  constructor() { }

  ngOnInit(): void {

    this.showInSmartTable();
  }

  showInSmartTable(): void {

    // let regToShow : {
    //     id:number,
    //     numTema: number,
    //     seccion: string,
    //     subSeccion: string,
    //     comisiones: string,
    //     estado: string,
    //     desTema: string }[] = [];

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
    let data: Especialidad[] = [
      {id:1,  desEspecialidad:"Pediatría"},
      {id:2,  desEspecialidad:"Medicina General"},
      {id:3,  desEspecialidad:"Oftalmología"},
      {id:4,  desEspecialidad:"Otorrinolaringología"},
      {id:5,  desEspecialidad:"Gastroenterología"},
      {id:6,  desEspecialidad:"Nutrición"},
      {id:7,  desEspecialidad:"Radiología"},
      {id:8,  desEspecialidad:"Nutrición"},
      {id:9,  desEspecialidad:"Radiología"},
      {id:10, desEspecialidad:"Radiología"},
      {id:11,  desEspecialidad:"Pediatría11"},
      {id:12,  desEspecialidad:"Medicina General"},
      {id:13,  desEspecialidad:"Oftalmología"},
      {id:14,  desEspecialidad:"Otorrinolaringología"},
      {id:15,  desEspecialidad:"Gastroenterología"},
      {id:16,  desEspecialidad:"Nutrición"},
      {id:17,  desEspecialidad:"Radiología"},
      {id:18,  desEspecialidad:"Nutrición"},
      {id:19,  desEspecialidad:"Radiología"},
      {id:20, desEspecialidad:"Radiología"},
      {id:21,  desEspecialidad:"Pediatría"},
      {id:22,  desEspecialidad:"Medicina General"},
      {id:23,  desEspecialidad:"Oftalmología"},
      {id:24,  desEspecialidad:"Otorrinolaringología"},
      {id:25,  desEspecialidad:"Gastroenterología"},
      {id:26,  desEspecialidad:"Nutrición"},
      {id:27,  desEspecialidad:"Radiología"},
      {id:28,  desEspecialidad:"Nutrición"},
      {id:29,  desEspecialidad:"Radiología"},
      {id:30, desEspecialidad:"Radiología"},
      {id:31,  desEspecialidad:"Pediatría"},
      {id:32,  desEspecialidad:"Medicina General"},
      {id:33,  desEspecialidad:"Oftalmología"},
      {id:34,  desEspecialidad:"Otorrinolaringología"},
      {id:35,  desEspecialidad:"Gastroenterología"},
      {id:36,  desEspecialidad:"Nutrición"},
      {id:37,  desEspecialidad:"Radiología"},
      {id:38,  desEspecialidad:"Nutrición"},
      {id:39,  desEspecialidad:"Radiología"},
      {id:40, desEspecialidad:"Radiología"},
    ]
    this.source.load(data);

  }

  onEdit(event): void {
    // this.$sessionStorage.store('currentValueSelect', this.agenda );
    // this.localPage = this.source.getPaging();
    // this.$sessionStorage.store('currentPageSelect', this.localPage );
    // //console.log(this.localPage)
    // this.router.navigate(['/pages/tema-agenda/edit'],{ queryParams: { page: event.data.id+"_"+this.agenda.codAgenda } });
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

import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Doctor } from 'app/_model/doctor';

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
      numDni: {
        title: 'Nº DNI',
        type: 'string',
      },
      desApellidop: {
        title: 'Apellido Paterno',
        type: 'string'
      },
      desApellidom:{
        title: 'Apellido Materno',
        type: 'string',
      },
      desNombre: {
        title: 'Nombres',
        type: 'string',
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();
  data: Doctor[];

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
    let data: Doctor[] = [
      {id:1, numDni:"41111111", desApellidop:"dato2", desApellidom:"dato3", desNombre:"dato4"},
      {id:2, numDni:"41222222", desApellidop:"dato2", desApellidom:"dato3", desNombre:"dato4"},
      {id:3, numDni:"41333333", desApellidop:"dato2", desApellidom:"dato3", desNombre:"dato4"},
      {id:4, numDni:"41333333", desApellidop:"dato2", desApellidom:"dato3", desNombre:"dato4"},
      {id:5, numDni:"41444444", desApellidop:"dato2", desApellidom:"dato3", desNombre:"dato4"}
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

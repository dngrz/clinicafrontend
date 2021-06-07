import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Usuario } from 'app/_model/usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

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
      usuario: {
        title: 'Usuario',
        type: 'string'
      },
      clave: {
        title: 'Contraseña',
        type: 'string'
      },
      perfil: {
        title: 'Perfil',
        type: 'string'
      },
      fecIngreso: {
        title: 'Fecha de Ingreso',
        type: 'string'
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();
  data: Usuario[];

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
    let data: Usuario[] = [
      {id:1,  usuario:"usuario1", clave: "123", perfil:"PACIENTE",fecIngreso:"15-03-2019" },
      {id:2,  usuario:"secre", clave: "123", perfil:"SECRETARIA",fecIngreso:"15-03-2021" },
      {id:3,  usuario:"doctor3", clave: "123", perfil:"DOCTOR",fecIngreso:"15-03-2020" },
      {id:4,  usuario:"doctor4", clave: "123", perfil:"DOCTOR",fecIngreso:"15-03-2020" },
      {id:5,  usuario:"doctor5", clave: "123", perfil:"DOCTOR",fecIngreso:"15-03-2020" },
      {id:6,  usuario:"doctor6", clave: "123", perfil:"DOCTOR",fecIngreso:"15-03-2020" },
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

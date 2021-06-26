import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Especialidad } from 'app/_model/especialidad';
import { EspecialidadService } from 'app/_services/especialidad.service';

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
      add: false,
      edit: false,
      delete: false,
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
      nomEspecialidad: {
        title: 'Especialidad',
        type: 'string'
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();
  data: Especialidad[];

  constructor(private especialidadService: EspecialidadService) { }

  ngOnInit(): void {

    this.showInSmartTable();
  }

  showInSmartTable(): void {

    this.especialidadService.listar().subscribe( data => {
      if(data){
        console.log(data);
        this.source.load(data);
      }
    });

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

  onChangeSelect(newObj: any) {
    // let selectedObj = JSON.parse(newObj);
    // this.agenda = selectedObj;
    // this.retrieveTemasAgenda();
    console.log("onChangeSelect");
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

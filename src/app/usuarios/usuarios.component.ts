import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Usuario } from 'app/_model/usuario';
import { UsuariosService } from 'app/_services/usuarios.service';
import { DatePipe } from '@angular/common';

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
      },
      idPaciente: {
        title: 'ID Paciente',
        type: 'number'
      },
      idDoctor: {
        title: 'ID Doctor',
        type: 'number'
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();
  data: Usuario[];

  constructor(private usuarioService: UsuariosService, private datePipe: DatePipe) { }

  ngOnInit(): void {

    this.showInSmartTable();
  }

  showInSmartTable(): void {

    this.usuarioService.listar().subscribe(data => {
      if (data) {
        let regToShow : {
          id: number;
          usuario?: string;
          clave?: string;
          perfil?: string;
          fecIngreso?: any;
          idPaciente?: number;
          idDoctor?: number;        
        } [] = [];

        for (var i = 0; i < data.length; i++) {
          let rowData: any;
          rowData = {
            id: data[i].id,
            usuario: data[i].usuario,
            clave: data[i].clave,
            perfil: data[i].perfil,
            fecIngreso: this.datePipe.transform(data[i].fecIngreso,'yyyy-MM-dd'),
            idPaciente: (data[i].paciente) ?  data[i].paciente.id: 0,
            idDoctor: (data[i].doctor) ?  data[i].doctor.id: 0
          }
          regToShow.push(rowData);
        }

        this.source.load(regToShow);
      }
    })
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

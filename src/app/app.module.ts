import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { CitasComponent } from './citas/citas.component';
import { DoctoresComponent } from './doctores/doctores.component';
import { EspecialidadesComponent } from './especialidades/especialidades.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { HistoriaComponent } from './historia/historia.component';
import { NominaComponent } from './nomina/nomina.component';
import { ImpuestosComponent } from './impuestos/impuestos.component';
import { CostosComponent } from './costos/costos.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    Ng2SmartTableModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    PacientesComponent,
    CitasComponent,
    DoctoresComponent,
    EspecialidadesComponent,
    UsuariosComponent,
    HistoriaComponent,
    NominaComponent,
    ImpuestosComponent,
    CostosComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

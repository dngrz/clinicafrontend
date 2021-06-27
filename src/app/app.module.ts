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
import { RegistroComponent } from './registro/registro.component';
import { DatePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AuthguardGuard } from './_guards/authguard.guard';

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
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule
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
    RegistroComponent
  ],
  providers: [DatePipe, AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule, MatNativeDateModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { DoctoresRegComponent } from 'app/doctores/components/doctores-reg/doctores-reg.component';
import { EspecialidadesRegComponent } from 'app/especialidades/components/especialidades-reg/especialidades-reg.component';
import { HistoriaRegComponent } from 'app/historia/components/historia-reg/historia-reg.component';
import { PacientesRegComponent } from 'app/pacientes/components/pacientes-reg/pacientes-reg.component';
import { CitasRegComponent } from 'app/citas/components/citas-reg/citas-reg.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    DoctoresRegComponent,
    EspecialidadesRegComponent,
    HistoriaRegComponent,
    CitasRegComponent,
    HistoriaRegComponent,
    PacientesRegComponent,
    UpgradeComponent,
  ]
})

export class AdminLayoutModule {}

import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { PacientesComponent } from 'app/pacientes/pacientes.component';
import { DoctoresComponent } from 'app/doctores/doctores.component';
import { CitasComponent } from 'app/citas/citas.component';
import { EspecialidadesComponent } from 'app/especialidades/especialidades.component';
import { UsuariosComponent } from 'app/usuarios/usuarios.component';
import { HistoriaComponent } from 'app/historia/historia.component';
import { NominaComponent } from 'app/nomina/nomina.component';
import { CostosComponent } from 'app/costos/costos.component';
import { ImpuestosComponent } from 'app/impuestos/impuestos.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'pacientes',      component: PacientesComponent },
    { path: 'doctores',       component: DoctoresComponent },
    { path: 'citas',          component: CitasComponent },
    { path: 'especialidades', component: EspecialidadesComponent },
    { path: 'usuarios',       component: UsuariosComponent },
    { path: 'historia',       component: HistoriaComponent },
    { path: 'nomina',         component: NominaComponent },
    { path: 'costos',         component: CostosComponent },
    { path: 'impuestos',      component: ImpuestosComponent },
];

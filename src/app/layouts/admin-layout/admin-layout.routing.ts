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
import { DoctoresRegComponent } from 'app/doctores/components/doctores-reg/doctores-reg.component';
import { PacientesRegComponent } from 'app/pacientes/components/pacientes-reg/pacientes-reg.component';
import { HistoriaRegComponent } from 'app/historia/components/historia-reg/historia-reg.component';
import { CitasRegComponent } from 'app/citas/components/citas-reg/citas-reg.component';

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
    { path: 'dashboard',           component: DashboardComponent },
    { path: 'user-profile',        component: UserProfileComponent },
    { path: 'upgrade',             component: UpgradeComponent },
    { path: 'pacientes',           component: PacientesComponent },
    { path: 'doctores',            component: DoctoresComponent },
    { path: 'citas',               component: CitasComponent },
    { path: 'especialidades',      component: EspecialidadesComponent },
    { path: 'usuarios',            component: UsuariosComponent },
    { path: 'historia',            component: HistoriaComponent },
    { path: 'nomina',              component: NominaComponent },
    { path: 'costos',              component: CostosComponent },
    { path: 'impuestos',           component: ImpuestosComponent },
    { path: 'doctores/edit',       component: DoctoresRegComponent },
    { path: 'doctores/new',        component: DoctoresRegComponent },
    { path: 'historia/edit',       component: HistoriaRegComponent },
    { path: 'historia/new',        component: HistoriaRegComponent },
    { path: 'citas/edit',          component: CitasRegComponent },
    { path: 'citas/new',           component: CitasRegComponent },
    { path: 'pacientes/edit',      component: PacientesRegComponent },
    { path: 'pacientes/new',       component: PacientesRegComponent }
];

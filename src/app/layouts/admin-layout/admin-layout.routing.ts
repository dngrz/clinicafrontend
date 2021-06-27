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
import { AuthguardGuard } from 'app/_guards/authguard.guard';

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
    { path: 'dashboard',           component: DashboardComponent, canActivate: [AuthguardGuard] },
    { path: 'user-profile',        component: UserProfileComponent, canActivate: [AuthguardGuard] },
    { path: 'upgrade',             component: UpgradeComponent },
    { path: 'especialidades',      component: EspecialidadesComponent, canActivate: [AuthguardGuard] },
    { path: 'usuarios',            component: UsuariosComponent, canActivate: [AuthguardGuard] },
    { path: 'nomina',              component: NominaComponent, canActivate: [AuthguardGuard] },
    { path: 'costos',              component: CostosComponent, canActivate: [AuthguardGuard] },
    { path: 'impuestos',           component: ImpuestosComponent, canActivate: [AuthguardGuard] },
    { path: 'doctores',            component: DoctoresComponent, canActivate: [AuthguardGuard] },
    { path: 'doctores/edit',       component: DoctoresRegComponent, canActivate: [AuthguardGuard] },
    { path: 'doctores/new',        component: DoctoresRegComponent, canActivate: [AuthguardGuard] },
    { path: 'historia',            component: HistoriaComponent, canActivate: [AuthguardGuard] },
    { path: 'historia/edit',       component: HistoriaRegComponent, canActivate: [AuthguardGuard] },
    { path: 'historia/new',        component: HistoriaRegComponent, canActivate: [AuthguardGuard] },
    { path: 'citas',               component: CitasComponent, canActivate: [AuthguardGuard] },
    { path: 'citas/edit',          component: CitasRegComponent, canActivate: [AuthguardGuard] },
    { path: 'citas/new',           component: CitasRegComponent, canActivate: [AuthguardGuard] },
    { path: 'pacientes',           component: PacientesComponent, canActivate: [AuthguardGuard] },
    { path: 'pacientes/edit',      component: PacientesRegComponent, canActivate: [AuthguardGuard] },
    { path: 'pacientes/new',       component: PacientesRegComponent, canActivate: [AuthguardGuard] }
];

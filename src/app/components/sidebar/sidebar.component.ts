import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: '/user-profile', title: 'User Profile',  icon:'person', class: '' },
    { path: '/table-list', title: 'Table List',  icon:'content_paste', class: '' },
    { path: '/typography', title: 'Typography',  icon:'library_books', class: '' },
//    { path: '/icons', title: 'Icons',  icon:'bubble_chart', class: '' },
//    { path: '/maps', title: 'Maps',  icon:'location_on', class: '' },
    { path: '/notifications', title: 'Notifications',  icon:'notifications', class: '' },
    //{ path: '/upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
    { path: '/usuarios', title: 'Usuarios',  icon:'content_paste', class: '' },
    { path: '/pacientes', title: 'Pacientes',  icon:'person', class: '' },
    { path: '/doctores', title: 'Doctores',  icon:'person', class: '' },
    { path: '/especialidades', title: 'Especialidades',  icon:'content_paste', class: '' },
    { path: '/citas', title: 'Citas',  icon:'library_books', class: '' },
    { path: '/historia', title: 'Historia Clínica',  icon:'library_books', class: '' },
    { path: '/costos', title: 'Costos',  icon:'content_paste', class: '' },
    { path: '/impuestos', title: 'Impuestos',  icon:'content_paste', class: '' },
    { path: '/nomina', title: 'Nómina (Planillas)',  icon:'content_paste', class: '' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}

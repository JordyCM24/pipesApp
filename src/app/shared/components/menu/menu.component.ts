import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent implements OnInit {

  menuItems: MenuItem[] = [];

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'Pipes de Angular', 
        icon: 'pi pi-fw pi-desktop',
        items: [
          {
            label: 'Texto y Fechas', 
            icon: 'pi pi-align-left ',
          },
          {
            label: 'Numeros', 
            icon: 'pi pi-dollar ',
          },
          {
            label: 'No comunes', 
            icon: 'pi pi-globe ',
          },
        ]
      },
      {
        label: 'Pipes personalizados', 
        icon: 'pi pi-fw pi-cog',
        items: [
          {
            label: 'Otro elemento', 
            icon: 'pi pi-cog',
          },
        ]
      },
    ];
  }
}

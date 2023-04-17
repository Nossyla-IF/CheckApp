import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    //{ title: 'Inicio', url: 'home', icon: 'home' },
    { title: 'Lista de Compras', url: 'lista-de-compras', icon: 'list' },
    //{ title: 'Lista 1', url: 'lista1', icon: 'list' },
    //{ title: 'Lista 2', url: 'lista2', icon: 'list' },
    //{ title: 'Lista 3', url: 'lista3', icon: 'list' },
    //{ title: 'Lista 4', url: 'lista4', icon: 'list' },
    //{ title: 'Lista 5', url: 'lista5', icon: 'list' },
    

  ];
  constructor() {}
}

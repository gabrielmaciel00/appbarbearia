import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Agendar horário', url: '/agendar', icon: 'calendar-number' },
    { title: 'Cadastro', url: '/cadastro', icon: 'people' },
    { title: 'Histórico', url: '/historico', icon: 'time' },
    { title: 'Estoque de produtos', url: '/estoque', icon: 'stats-chart' },
    { title: 'Relatórios', url: '/relatorio', icon: 'document-text',},

  ];

  constructor() {}
}

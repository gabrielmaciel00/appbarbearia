import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },

  {
    path: 'inicio',
    loadChildren: () => import('./pagina/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'agendar',
    loadChildren: () => import('./pagina/agendar/agendar.module').then( m => m.AgendarPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pagina/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'historico',
    loadChildren: () => import('./pagina/historico/historico.module').then( m => m.HistoricoPageModule)
  },
  {
    path: 'estoque',
    loadChildren: () => import('./pagina/estoque/estoque.module').then( m => m.EstoquePageModule)
  },
  {
    path: 'relatorio',
    loadChildren: () => import('./pagina/relatorio/relatorio.module').then( m => m.RelatorioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pagina/login/login.module').then( m => m.LoginPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

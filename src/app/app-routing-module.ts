import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth/inicio' },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth-module').then(m => m.AuthModule),
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'tarefas', loadChildren: () => import('./tarefas/tarefas-module').then(m => m.TarefasModule) },
      { path: 'calendario', loadChildren: () => import('./calendario/calendario-module').then(m => m.CalendarioModule) },
      { path: 'xp', loadChildren: () => import('./xp/xp-module').then(m => m.XpModule) },
      { path: 'amigos', loadChildren: () => import('./amigos/amigos-module').then(m => m.AmigosModule) },
      { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard-module').then(m => m.DashboardModule) },
      { path: 'configuracoes', loadChildren: () => import('./configuracoes/configuracoes-module').then(m => m.ConfiguracoesModule) },
    ],
  },
  { path: '**', redirectTo: 'tarefas' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

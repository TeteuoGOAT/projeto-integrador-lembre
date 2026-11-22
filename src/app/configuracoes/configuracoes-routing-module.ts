import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaConfiguracoesComponent } from './pagina-configuracoes/pagina-configuracoes.component';

const routes: Routes = [
  { path: '', component: PaginaConfiguracoesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfiguracoesRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaTarefasComponent } from './pagina-tarefas/pagina-tarefas.component';

const routes: Routes = [
  { path: '', component: PaginaTarefasComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TarefasRoutingModule {}

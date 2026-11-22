import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarefasRoutingModule } from './tarefas-routing-module';
import { PaginaTarefasComponent } from './pagina-tarefas/pagina-tarefas.component';

@NgModule({
  declarations: [PaginaTarefasComponent],
  imports: [CommonModule, TarefasRoutingModule],
})
export class TarefasModule {}

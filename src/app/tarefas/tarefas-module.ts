import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TarefasRoutingModule } from './tarefas-routing-module';
import { PaginaTarefasComponent } from './pagina-tarefas/pagina-tarefas.component';
import { SharedModule } from '../shared/shared-module';

@NgModule({
  declarations: [PaginaTarefasComponent],
  imports: [CommonModule, TarefasRoutingModule, SharedModule],
})
export class TarefasModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarioRoutingModule } from './calendario-routing-module';
import { PaginaCalendarioComponent } from './pagina-calendario/pagina-calendario.component';
import { SharedModule } from '../shared/shared-module';

@NgModule({
  declarations: [PaginaCalendarioComponent],
  imports: [CommonModule, CalendarioRoutingModule, SharedModule],
})
export class CalendarioModule {}

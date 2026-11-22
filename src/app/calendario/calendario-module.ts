import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarioRoutingModule } from './calendario-routing-module';
import { PaginaCalendarioComponent } from './pagina-calendario/pagina-calendario.component';

@NgModule({
  declarations: [PaginaCalendarioComponent],
  imports: [CommonModule, CalendarioRoutingModule],
})
export class CalendarioModule {}

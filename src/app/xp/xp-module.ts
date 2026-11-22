import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XpRoutingModule } from './xp-routing-module';
import { PaginaXpComponent } from './pagina-xp/pagina-xp.component';

@NgModule({
  declarations: [PaginaXpComponent],
  imports: [CommonModule, XpRoutingModule],
})
export class XpModule {}

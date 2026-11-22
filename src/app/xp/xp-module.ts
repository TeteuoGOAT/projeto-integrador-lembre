import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { XpRoutingModule } from './xp-routing-module';
import { PaginaXpComponent } from './pagina-xp/pagina-xp.component';
import { SharedModule } from '../shared/shared-module';

@NgModule({
  declarations: [PaginaXpComponent],
  imports: [CommonModule, XpRoutingModule, SharedModule],
})
export class XpModule {}

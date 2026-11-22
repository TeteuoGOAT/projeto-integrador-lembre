import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmigosRoutingModule } from './amigos-routing-module';
import { PaginaAmigosComponent } from './pagina-amigos/pagina-amigos.component';
import { SharedModule } from '../shared/shared-module';

@NgModule({
  declarations: [PaginaAmigosComponent],
  imports: [CommonModule, AmigosRoutingModule, SharedModule],
})
export class AmigosModule {}

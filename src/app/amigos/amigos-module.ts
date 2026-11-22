import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmigosRoutingModule } from './amigos-routing-module';
import { PaginaAmigosComponent } from './pagina-amigos/pagina-amigos.component';

@NgModule({
  declarations: [PaginaAmigosComponent],
  imports: [CommonModule, AmigosRoutingModule],
})
export class AmigosModule {}

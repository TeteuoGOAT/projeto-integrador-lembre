import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfiguracoesRoutingModule } from './configuracoes-routing-module';
import { PaginaConfiguracoesComponent } from './pagina-configuracoes/pagina-configuracoes.component';

@NgModule({
  declarations: [PaginaConfiguracoesComponent],
  imports: [CommonModule, ConfiguracoesRoutingModule],
})
export class ConfiguracoesModule {}

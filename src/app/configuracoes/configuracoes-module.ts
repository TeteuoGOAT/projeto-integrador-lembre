import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfiguracoesRoutingModule } from './configuracoes-routing-module';
import { PaginaConfiguracoesComponent } from './pagina-configuracoes/pagina-configuracoes.component';
import { SharedModule } from '../shared/shared-module';

@NgModule({
  declarations: [PaginaConfiguracoesComponent],
  imports: [CommonModule, ConfiguracoesRoutingModule, SharedModule],
})
export class ConfiguracoesModule {}

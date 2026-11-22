import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing-module';
import { InicioComponent } from './inicio/inicio.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [InicioComponent, CadastroComponent, LoginComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaAmigosComponent } from './pagina-amigos/pagina-amigos.component';

const routes: Routes = [
  { path: '', component: PaginaAmigosComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AmigosRoutingModule {}

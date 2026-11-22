import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaCalendarioComponent } from './pagina-calendario/pagina-calendario.component';

const routes: Routes = [
  { path: '', component: PaginaCalendarioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarioRoutingModule {}

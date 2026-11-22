import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaXpComponent } from './pagina-xp/pagina-xp.component';

const routes: Routes = [
  { path: '', component: PaginaXpComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class XpRoutingModule {}
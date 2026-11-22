import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaDashboardComponent } from './pagina-dashboard/pagina-dashboard.component';

const routes: Routes = [
  { path: '', component: PaginaDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}

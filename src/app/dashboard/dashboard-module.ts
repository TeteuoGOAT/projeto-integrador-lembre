import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing-module';
import { PaginaDashboardComponent } from './pagina-dashboard/pagina-dashboard.component';

@NgModule({
  declarations: [PaginaDashboardComponent],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}

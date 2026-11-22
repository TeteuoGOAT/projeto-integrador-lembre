import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing-module';
import { PaginaDashboardComponent } from './pagina-dashboard/pagina-dashboard.component';
import { SharedModule } from '../shared/shared-module';

@NgModule({
  declarations: [PaginaDashboardComponent],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}

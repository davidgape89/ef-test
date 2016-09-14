import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { GaugeComponent } from './gauge/index';
import { DashboardService } from '../shared/index';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [DashboardComponent, GaugeComponent],
  exports: [DashboardComponent],
  providers: [DashboardService]
})
export class DashboardModule { }
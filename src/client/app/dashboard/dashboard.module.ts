import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { GaugeComponent } from './gauge/index';
import { SwitchComponent } from './switch/index';
import { DashboardService } from '../shared/index';
import { Ng2HighchartsModule } from 'ng2-highcharts';

@NgModule({
  imports: [CommonModule, SharedModule, Ng2HighchartsModule],
  declarations: [DashboardComponent, GaugeComponent, SwitchComponent],
  exports: [DashboardComponent],
  providers: [DashboardService]
})
export class DashboardModule { }

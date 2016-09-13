import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { NameListService } from '../shared/name-list/index';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  // TODO - Implement new service
  //providers: [NameListService]
})
export class DashboardModule { }
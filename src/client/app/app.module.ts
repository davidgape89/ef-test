import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

import {DashboardModule} from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';
import { WebSocketService } from './shared/index';

@NgModule({
  imports: [BrowserModule, HttpModule, RouterModule.forRoot(routes), DashboardModule, SharedModule.forRoot()],
  declarations: [AppComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }, WebSocketService],
  bootstrap: [AppComponent]

})

export class AppModule { }

import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../shared/index';
import {StatusDTO} from '../shared/index';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  private _dashboardService: DashboardService;
  
  public averageAltitude: number = 0;
  public averageSpeed: number = 0;
  public packagesReceived: number = 0;
  public status: StatusDTO = StatusDTO.Wait;
  public currentFlaps: number = 0;
  public currentLanding: boolean = false;

  // TODO - include the new service in the constructor whenever it is implemented
  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(dashboardService: DashboardService) {
    this._dashboardService = dashboardService;
    this._dashboardService.messages.subscribe(msg => {
      //TODO - Ignore negative data
      this.packagesReceived++;
      console.log(msg);
    });
  }

  /**
   * Initializes after rendering OnInit
   */
  ngOnInit() {
    
  }

  public landingChanged(event: number) {
    this.currentLanding = event === 1;
    console.log("Landing changed to ", event);
  }

  public flapsChanged(event: number) {
    this.currentFlaps = event;
    console.log("Flaps changed to ", event);
  }

}
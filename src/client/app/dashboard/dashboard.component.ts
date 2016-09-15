import { Component } from '@angular/core';
import {DashboardService} from '../shared/index';
import {StatusDTO} from '../shared/index';

@Component({
  moduleId: module.id,
  selector: 'sd-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})

export class DashboardComponent {
  public currentAltitude: number = 0;
  public averageAltitude: number = 0;
  public currentSpeed: number = 0;
  public averageSpeed: number = 0;
  public packagesReceived: number = 0;
  public status: StatusDTO = StatusDTO.Off;
  public currentFlaps: number = 0;
  public currentLanding: boolean = false;

  private _dashboardService: DashboardService;

  /**
   * Creates an instance of the DashboardComponent with the injected
   * DashboardService.
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
   * Updates the landing gear attribute.
   *
   * @param {number} event Number of the current value.
   */
  public landingChanged(event: number) {
    this.currentLanding = event === 1;
  }

  /**
   * Updates the flaps attribute.
   *
   * @param {number} event Number of the current value.
   */
  public flapsChanged(event: number) {
    this.currentFlaps = event;
  }

}

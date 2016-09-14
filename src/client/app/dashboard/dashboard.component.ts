import { Component, OnInit } from '@angular/core';
import {DashboardService} from '../shared/index';

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
  newName: string = '200';

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
      console.log(msg);
    });
  }

  /**
   * Initializes after rendering OnInit
   */
  ngOnInit() {
    
  }

}
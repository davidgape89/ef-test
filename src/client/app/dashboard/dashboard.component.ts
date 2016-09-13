import { Component, OnInit } from '@angular/core';
//import { NameListService } from '../shared/index';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
})

export class DashboardComponent implements OnInit {

  newName: string = '';
  errorMessage: string;
  names: any[] = [];

  // TODO - include the new service in the constructor whenever it is implemented
  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor() {}

  /**
   * Initializes after rendering OnInit
   */
  ngOnInit() {
    
  }

}
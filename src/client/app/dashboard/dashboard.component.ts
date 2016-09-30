import { Component } from '@angular/core';
import {DashboardService} from '../shared/index';
import {StatusDTO} from '../shared/index';
import {ResponseMessageDTO, TelemetryDTO, ControlDTO} from '../shared/models/index';

@Component({
  moduleId: module.id,
  selector: 'sd-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})

export class DashboardComponent {
  public avTelemetry: TelemetryDTO;
  public telemetry: TelemetryDTO;
  public packagesReceived: number = 0;
  public status: StatusDTO = StatusDTO.Wait;
  public control: ControlDTO;

  private _dashboardService: DashboardService;

  /**
   * Creates an instance of the DashboardComponent with the injected
   * DashboardService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(dashboardService: DashboardService) {
    // Initialize switches values
    this.control = {
      flaps: 0,
      landing_gear: 0
    };

    this.telemetry = {
      airspeed: 0,
      altitude: 0
    };

    this.avTelemetry = {
      airspeed: 0,
      altitude: 0
    };

    this._dashboardService = dashboardService;

    // Set up the subscription (success, error, finished)
    this._dashboardService.messages.subscribe(
      // on message
      (response: ResponseMessageDTO | string) => {
        // Set the connection to on when it is the initial string
        if(typeof response === 'string') {
          if(response === 'hello, world') {
            this.status = StatusDTO.On;
          }
        } else {
          this.updateData(response);
        }
      },
      // on error
      (error: string) => {
        console.error('ERROR:: Something went wrong with the socket.');
        console.error(error);
      },
      // on close
      () => {
        this.status = StatusDTO.Off;
      });
  }

  /**
   * Updates the landing gear attribute.
   *
   * @param {number} event Number of the current value.
   */
  public landingChanged(event: number) {
    this.control.landing_gear = event;
    this._sendControl();
  }

  /**
   * Updates the flaps attribute.
   *
   * @param {number} event Number of the current value.
   */
  public flapsChanged(event: number) {
    this.control.flaps = event;
    this._sendControl();
  }

  /**
   * Updates the data according to the response received.
   *
   * @param {ResponseMessageDTO} response Control and telemetry data received.
   */
  public updateData(response: ResponseMessageDTO) {
    // Ignore data if it is wrong
    if(response.telemetry.airspeed > 0
      && response.telemetry.altitude > 0) {
      this.packagesReceived++;

      // Set airspeed average
      if(this.avTelemetry.airspeed === 0) {
        this.avTelemetry.airspeed = response.telemetry.airspeed;
      } else {
        this.avTelemetry.airspeed -= this.avTelemetry.airspeed / this.packagesReceived;
        this.avTelemetry.airspeed += response.telemetry.airspeed / this.packagesReceived;
        this.avTelemetry.airspeed = Math.floor(this.avTelemetry.airspeed * 100) / 100;
      }
      this.telemetry.airspeed = response.telemetry.airspeed;

      // Set altitude average
      if(this.avTelemetry.altitude === 0) {
        this.avTelemetry.altitude = response.telemetry.altitude;
      } else {
        this.avTelemetry.altitude -= this.avTelemetry.altitude / this.packagesReceived;
        this.avTelemetry.altitude += response.telemetry.altitude / this.packagesReceived;
        this.avTelemetry.altitude = Math.floor(this.avTelemetry.altitude * 100) / 100;
      }
      this.telemetry.altitude = response.telemetry.altitude;

    }

    // Set control data
    this.control = response.control;
  }

  /**
   * Sends a control message to the aircraft.
   *
   * @param {number} event Number of the current value.
   */
  private _sendControl() {
    this._dashboardService.messages.next(this.control);
  }

}

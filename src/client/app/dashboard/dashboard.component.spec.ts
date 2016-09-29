import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { Subject } from 'rxjs/Rx';
//import { By } from '@angular/platform-browser';
//import { DebugElement } from '@angular/core';

import {DashboardComponent} from './dashboard.component';
import {GaugeComponent} from './gauge/index';
import {SwitchComponent} from './switch/index';
import {DashboardService} from '../shared/index';
import {StatusDTO, ResponseMessageDTO} from '../shared/index';


export function main() {
    let dashComp: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;
    let subject: Subject<any>;
    let dataMock1: ResponseMessageDTO = {
        control: {
            flaps: 1,
            landing_gear: 2
        },
        telemetry: {
            airspeed: 200,
            altitude: 2500
        }
    };
    let dataMock2: ResponseMessageDTO = {
        control: {
            flaps: 1,
            landing_gear: 2
        },
        telemetry: {
            airspeed: 400,
            altitude: 3000
        }
    };

    let wrongAirMock: ResponseMessageDTO = {
        control: {
            flaps: 1,
            landing_gear: 2
        },
        telemetry: {
            airspeed: -400,
            altitude: 3000
        }
    };

    let wrongAltMock: ResponseMessageDTO = {
        control: {
            flaps: 1,
            landing_gear: 2
        },
        telemetry: {
            airspeed: 400,
            altitude: -3000
        }
    };

    // Mock service
    class DashboardMockService {
        public messages: Subject<any>;
        constructor() {
            this.messages = subject;
        }
    }

    describe('DashboardComponent', () => {
        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [ DashboardComponent, GaugeComponent, SwitchComponent ],
                providers: [{provide: DashboardService, useClass: DashboardMockService}]
            })
            .compileComponents();
        }));

        beforeEach(() => {
            // We generate the subject to mock the service
            subject = new Subject;

            fixture = TestBed.createComponent(DashboardComponent);

            dashComp = fixture.componentInstance;
        });

        it('should be generated correctly', () => {
            expect(dashComp).toBeDefined();
            expect(dashComp.control).toEqual({
                flaps: 0,
                landing_gear: 0
            });
            expect(dashComp.telemetry).toEqual({
                airspeed: 0,
                altitude: 0
            });
            expect(dashComp.avTelemetry).toEqual({
                airspeed: 0,
                altitude: 0
            });
        });

        it('should update connection status correctly', () => {
            expect(dashComp.status).toBe(StatusDTO.Wait);
            subject.next('hello, world');
            expect(dashComp.status).toBe(StatusDTO.On);
            subject.complete();
            expect(dashComp.status).toBe(StatusDTO.Off);
        });

        it('should receive and update data correctly', () => {
            subject.next(dataMock1);
            expect(dashComp.control).toEqual({
                flaps: 1,
                landing_gear: 2
            });
            expect(dashComp.telemetry).toEqual({
                airspeed: 200,
                altitude: 2500
            });
            expect(dashComp.avTelemetry).toEqual({
                airspeed: 200,
                altitude: 2500
            });
        });

        it('should not update data if it is wrong', () => {
            subject.next(dataMock1);
            subject.next(wrongAirMock);
            expect(dashComp.telemetry).toEqual({
                airspeed: 200,
                altitude: 2500
            });
            expect(dashComp.avTelemetry).toEqual({
                airspeed: 200,
                altitude: 2500
            });
            subject.next(wrongAltMock);
            expect(dashComp.telemetry).toEqual({
                airspeed: 200,
                altitude: 2500
            });
            expect(dashComp.avTelemetry).toEqual({
                airspeed: 200,
                altitude: 2500
            });
        });

        it('should compute the average correctly', () => {
            subject.next(dataMock1);
            subject.next(dataMock2);
            expect(dashComp.avTelemetry).toEqual({
                airspeed: 300,
                altitude: 2750
            });
        });

        it('should send a control message when the landing switch has changed', () => {
            spyOn(subject, 'next');
            dashComp.landingChanged(2);
            expect(subject.next).toHaveBeenCalledWith({
                flaps: 0,
                landing_gear: 2
            });
        });

        it('should send a control message when the flaps switch has changed', () => {
            spyOn(subject, 'next');
            dashComp.flapsChanged(1);
            expect(subject.next).toHaveBeenCalledWith({
                flaps: 1,
                landing_gear: 0
            });
        });
    });
}

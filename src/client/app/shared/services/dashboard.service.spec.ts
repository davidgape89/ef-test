import { ReflectiveInjector } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { WebSocketService } from './websocket.service';
import { ResponseMessageDTO } from '../models/index';
import { Subject } from 'rxjs/Rx';

export function main() {
    let subject: Subject<any>;
    let dashboardService: DashboardService;
    let stringResponse: any = {
        data: 'Hello, world'
    };
    let dataResponse: ResponseMessageDTO =  {
        control: {
            flaps: 1,
            landing_gear: 2
        },
        telemetry: {
            airspeed: 400,
            altitude: 3000
        }
    };
    
    class MockWebSocketService {
        public connect(url: string): Subject<any> {
            return subject;
        }
    }

    describe('Dashboard service', () => {
        beforeEach(() => {
            subject = new Subject;
            let injector = ReflectiveInjector.resolveAndCreate([
                DashboardService,
                {provide: WebSocketService,
                    useClass: MockWebSocketService}
            ]);

            dashboardService = injector.get(DashboardService);
        });

        it('should be defined', () => {
            expect(dashboardService).toBeDefined();
        });

        it('should return an observable', () => {
            expect(dashboardService.messages).toEqual(jasmine.any(Subject));
        });

        it('should map the response correctly if it is a string', () => {
            dashboardService.messages.subscribe((response) => {
                expect(response).toEqual('Hello, world');
            });
            subject.next(stringResponse);
        });

        it('should map the response correctly if it is a data message', () => {
            dashboardService.messages.subscribe((response) => {
                expect(response).toEqual(dataResponse);
            });
            subject.next({
                data: dataResponse
            });
        });

    });
}

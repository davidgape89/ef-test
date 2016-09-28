import { ReflectiveInjector } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { WebSocketService } from './websocket.service';
import {Subject, Observable} from 'rxjs/Rx';

export function main() {
    let subject: Subject<any> = new Subject;
    class MockWebSocketService {
        public connect(url: string): Observable<any> {
            console.log('returning subject', subject);
            return subject;
        }
    }

    describe('Dashboard service', () => {
        let dashboardService: DashboardService;

        beforeEach(() => {
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

        it('should map the response correctly', () => {
            dashboardService.messages.subscribe((response) => {
                console.log(response);
            });
            console.log(dashboardService.messages);
            subject.next({
                response: {
                    data: {
                        string: 'this is data'
                    }
                }
            });
            expect(true).toBe(true);
        });

    });
}

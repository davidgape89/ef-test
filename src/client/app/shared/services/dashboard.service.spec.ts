import { ReflectiveInjector } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { WebSocketService } from './websocket.service';
import * as Rx from 'rxjs/Rx';

export function main() {
    let subject: Rx.Subject<any>;
    class MockWebSocketService {
        public connect(url: string): Rx.Observable<any> {
            return subject;
        }
    }

    describe('Dashboard service', () => {
        let dashboardService: DashboardService;
        subject = new Rx.Subject;

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
            expect(dashboardService.messages).toEqual(jasmine.any(Rx.Subject));
        });

    })
}
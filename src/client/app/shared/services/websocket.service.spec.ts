import { WebSocketService } from './websocket.service';
import { ReflectiveInjector } from '@angular/core';

export function main() {
    class WebSocketMock {
        constructor(){}
    }

    describe('Dashboard service', () => {
        let webSocketService: WebSocketService;

        beforeEach(() => {
            let injector = ReflectiveInjector.resolveAndCreate([
                WebSocketService,
                {provide: WebSocket,
                    useClass: WebSocketMock}
            ]);

            webSocketService = injector.get(WebSocketService);
        });

        it('should be defined', () => {
            expect(webSocketService).toBeDefined();
        });

    });
}

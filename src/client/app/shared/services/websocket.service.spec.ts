import { WebSocketService } from './websocket.service';
import { ReflectiveInjector } from '@angular/core';
import { Subject } from 'rxjs/Rx';

export function main() {
    class MockSocket {
        public readyState: any = WebSocket.CLOSED;

        constructor(url: string) {
            //constructor
        }

        public send(request: any) {
            //send method
        }

        public onmessage(request: any) {
            //onmessage method
        }

        public onerror(event: any) {
            //onerror method
        }

        public onclose(event: any) {
            //onclose method
        }

        public close() {
            //close method
        }
    }

    describe('WebSocket service', () => {
        let webSocketService: WebSocketService;
        let ws: MockSocket;

        beforeEach(() => {
            let injector = ReflectiveInjector.resolveAndCreate([
                WebSocketService
            ]);

            webSocketService = injector.get(WebSocketService);
            spyOn(window, 'WebSocket').and.callFake(function(url: any) {
                ws = new MockSocket(url);
                return ws;
            });
        });

        it('should be defined', () => {
            expect(webSocketService).toBeDefined();
        });

        it('should return a subject', () => {
            let subject = webSocketService.connect('ws://url');
            expect(subject).toEqual(jasmine.any(Subject));
            // Should return the same subject as before
            expect(webSocketService.connect('ws://url')).toBe(subject);
        });

        it('it should not send data when the socket is closed', () => {
            let subject: Subject<any> = webSocketService.connect('ws://url');
            let spy = spyOn(ws, 'send');
            subject.next('request');
            expect(spy.calls.any()).toEqual(false);
        });

        it('it should not send data when the socket is open', () => {
            let subject: Subject<any> = webSocketService.connect('ws://url');
            ws.readyState = WebSocket.OPEN;
            let spy = spyOn(ws, 'send');
            subject.next('request');
            expect(spy).toHaveBeenCalledWith('"request"');
        });

        it('it should send the response to its subscribers', () => {
            let subject: Subject<any> = webSocketService.connect('ws://url');
            subject.subscribe((response: any) => {
                expect(response).toBe('Hello, world!');
            });
            ws.onmessage('Hello, world!');
        });

    });
}

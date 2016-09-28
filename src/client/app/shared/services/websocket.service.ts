//https://medium.com/@lwojciechowski/websockets-with-angular2-and-rxjs-8b6c5be02fac#.pv59aiqy5

import { Injectable } from '@angular/core';
import * as Rx from 'rxjs/Rx';
import { ControlDTO } from '../models/ControlDTO';

@Injectable()
export class WebSocketService {
	private subject: Rx.Subject<MessageEvent>;

	public connect(url: string): Rx.Subject<MessageEvent> {
		if (!this.subject) {
			this.subject = this.create(url);
		}
		return this.subject;
	}

	private create(url: string): Rx.Subject<MessageEvent> {
		let ws = new WebSocket(url);

		let observable = Rx.Observable.create(
			(obs: Rx.Observer<MessageEvent>) => {
				ws.onmessage = obs.next.bind(obs);
				ws.onerror = obs.error.bind(obs);
				ws.onclose = obs.complete.bind(obs);

				return ws.close.bind(ws);
			});

		let observer = {
			next: (data: ControlDTO) => {
				if (ws.readyState === WebSocket.OPEN) {
					ws.send(JSON.stringify(data));
				}
			}
		};

		return Rx.Subject.create(observer, observable);
	}
}

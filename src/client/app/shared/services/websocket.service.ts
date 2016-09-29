//https://medium.com/@lwojciechowski/websockets-with-angular2-and-rxjs-8b6c5be02fac#.pv59aiqy5

import { Injectable } from '@angular/core';
import { Subject, Observable, Observer } 	from 'rxjs/Rx';
import { ControlDTO } from '../models/ControlDTO';

@Injectable()
export class WebSocketService {
	private subject: Subject<MessageEvent>;

	/**
	 * Connects to the socket in the url passed by parameters.
	 *
	 * @param {string} url - The url to connect.
	 * @returns {Subject<MessageEvent>} The subject instance of the websocket.
	 */
	public connect(url: string): Subject<MessageEvent> {
		if (!this.subject) {
			this.subject = this.create(url);
		}
		return this.subject;
	}

	/**
	 * Creates the WebSocket instance and links it to the subject.
	 *
	 * @param {string} url - The url to connect.
	 * @returns {Subject<MessageEvent>} The subject instance of the websocket.
	 */
	private create(url: string): Subject<MessageEvent> {
		let ws = new WebSocket(url);

		let observable = Observable.create(
			(obs: Observer<MessageEvent>) => {
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

		return Subject.create(observer, observable);
	}
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import {WebSocketService } from './websocket.service';
import {SERV_URL} from '../config/env.config';

@Injectable()
export class DashboardService {
    // TODO - Change the type
    public messages: Subject<any>;

    constructor(wsService: WebSocketService) {
		this.messages = <Subject<any>>wsService
			.connect('wss://echo.websocket.org')
			.map((response: MessageEvent): any => {
				let data = JSON.parse(response.data);
				return {
					author: data.author,
					message: data.message,
					newDate : data.newDate
				};
			});
	}
}

import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import {WebSocketService } from './websocket.service';
import {SERV_URL} from '../config/env.config';

@Injectable()
export class DashboardService {
    // TODO - Change the type
    public messages: Subject<any>;

    constructor(wsService: WebSocketService) {
		this.messages = <Subject<any>>wsService
			.connect(SERV_URL)
			.map((response: MessageEvent): any => {
				let data = JSON.parse(response.data);
				return {
					author: data.author,
					message: data.message,
					newDate : data.newDate
				}
			});
	}
}
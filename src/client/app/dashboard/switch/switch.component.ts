import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'switch',
    templateUrl: 'switch.component.html',
    styleUrls: ['switch.component.css']
})
export class SwitchComponent implements OnInit{
    @Input() current: number;
    @Input() positions: number;
    @Output() positionUpdate = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
        console.log('OnInit function-----------------------');
        console.log(this.current);
        console.log(this.positions);
        // TODO - Define the switch properties here
    }
}
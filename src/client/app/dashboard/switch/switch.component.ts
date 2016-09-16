import {Component, Input, Output, OnInit, EventEmitter, ElementRef} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'sd-switch',
    templateUrl: 'switch.component.html',
    styleUrls: ['switch.component.css']
})
export class SwitchComponent implements OnInit{
    @Input() current: number;
    @Input() positionNumber: number;
    @Output() changed = new EventEmitter();

    public positions: Array<any>;
    public posWidth: number;

    private _switchEl: ElementRef;
    
    // Accessing the native element is not recommended, 
    // but we only obtain the width
    constructor(switchEl: ElementRef) {
        this._switchEl = switchEl;
    }

    ngOnInit() {
        this.positions = new Array(this.positionNumber);
        this.posWidth = this._switchEl.nativeElement.offsetWidth / this.positionNumber;
    }

    public updateCurrent(i: number) {
        if(i !== this.current) {
            this.changed.emit(i);
        }
    }
}

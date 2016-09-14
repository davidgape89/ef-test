import {Component, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'gauge',
    templateUrl: 'gauge.component.html',
    styleUrls: ['gauge.component.css']
})
export class GaugeComponent {
    @Input() amount: number;
    @Input() isSpeed: boolean;
    @Input() bigNeedleDeg: string;
    @Input() smallNeedleDeg: string;

    constructor() {
    }
}
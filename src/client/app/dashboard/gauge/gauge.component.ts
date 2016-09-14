import {Component, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'gauge',
    templateUrl: 'gauge.component.html',
    styleUrls: ['gauge.component.css']
})
export class GaugeComponent {
    @Input() amount: number;
    @Input() bigNeedleDeg: string;
    @Input() isSpeed: boolean;
    @Input() smallNeedleDeg: string;

    constructor() {
    }
}
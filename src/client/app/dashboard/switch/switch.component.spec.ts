import {
    Component
} from '@angular/core';
import {
    async,
    TestBed
} from '@angular/core/testing';

import {
    SwitchComponent
} from './switch.component';

export function main() {
    describe('Switch component', () => {

        beforeEach(() => {
            TestBed.configureTestingModule({
                declarations: [TestComponent, SwitchComponent],
                imports: []
            });
        });

        it('should compile correctly',
            async(() => {
                TestBed
                    .compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        fixture.detectChanges();
                        let switchDOMEl = fixture.debugElement.children[0].nativeElement;
                        expect(switchDOMEl.querySelectorAll('div.switch.biPos').length).toBe(0);
                        expect(switchDOMEl.querySelectorAll('div.position').length).toBe(6);
                        expect(switchDOMEl.querySelectorAll('div.position.active').length).toBe(1);
                    });
            }));

        it('an event should trigger when the current position changed',
            async(() => {
                TestBed
                    .compileComponents()
                    .then(() => {
                        let fixture = TestBed.createComponent(TestComponent);
                        //fixture.detectChanges();
                        let switchInstance = fixture.debugElement.children[0].componentInstance;
                        spyOn(switchInstance.changed, 'emit');
                        switchInstance.updateCurrent(1);
                        fixture.detectChanges();
                        expect(switchInstance.changed.emit).toHaveBeenCalledWith(1);
                    });
            }));
    });

}

@Component({
    selector: 'test-cmp',
    template: `<sd-switch class="switch bottom" [current]="2" [positionNumber]="6"
            (changed)="flapsChanged($event)"></sd-switch>`
})
class TestComponent {
    public flapsChanged(event: number) {
        console.log('flapsChanged was called');
    }
}
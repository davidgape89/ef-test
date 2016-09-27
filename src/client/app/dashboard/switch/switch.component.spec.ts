import {
    Component
} from '@angular/core';
import {
    async,
    TestBed,
    ComponentFixture
} from '@angular/core/testing';

import {
    SwitchComponent
} from './switch.component';

export function main() {
    describe('Switch component', () => {
        let fixture: ComponentFixture<TestComponent>;
        let switchInstance: SwitchComponent;
        let spy: any;
        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [TestComponent, SwitchComponent],
                imports: []
            })
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(TestComponent);
            switchInstance = fixture.debugElement.children[0].componentInstance;
            spy = spyOn(switchInstance.changed, 'emit');
        });

        it('should compile correctly',() => {
            fixture.detectChanges();
            let switchDOMEl = fixture.debugElement.children[0].nativeElement;
            expect(switchDOMEl.querySelectorAll('div.switch.biPos').length).toBe(0);
            expect(switchDOMEl.querySelectorAll('div.position').length).toBe(6);
            expect(switchDOMEl.querySelectorAll('div.position.active').length).toBe(1);
        });

        it('an event should not trigger when the current position is not changed', () => {
            fixture.detectChanges();
            switchInstance.updateCurrent(2);
            expect(spy.calls.any()).toBe(false);
        });

        it('an event should trigger when the current position changed', () => {
            switchInstance.updateCurrent(1);
            fixture.detectChanges();
            expect(spy).toHaveBeenCalledWith(1);
        });

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

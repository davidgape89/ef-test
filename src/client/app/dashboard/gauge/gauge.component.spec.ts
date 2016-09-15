import { Component } from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import { GaugeComponent } from './gauge.component';

export function main() {
   describe('Gauge component', () => {

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent, GaugeComponent],
        imports: []
      });
    });

    it('should work',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            let gaugeDOMEl = fixture.debugElement.children[0].nativeElement;
            console.log(gaugeDOMEl);
	          //expect(gaugeDOMEl.querySelectorAll('h2')[0].textContent).toEqual('Features');
          });
        }));
    });
}

@Component({
  selector: 'test-cmp',
  template: `<sd-gauge class="gauge rightGauge" [amount]="1200.0"
        [bigNeedleDeg]="60" [smallNeedleDeg]="275" [isSpeed]="false"></sd-gauge>`
})
class TestComponent {}
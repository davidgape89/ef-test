import {
  Component
} from '@angular/core';
import {
  async,
  TestBed
} from '@angular/core/testing';

import {
  GaugeComponent
} from './gauge.component';

export function main() {
  describe('Gauge component', () => {

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent, GaugeComponent],
        imports: []
      });
    });

    it('should compile correctly and contain the correct elements',
      async(() => {
        TestBed
          .compileComponents()
          .then(() => {
            let fixture = TestBed.createComponent(TestComponent);
            let gaugeDOMEl = fixture.debugElement.children[0].nativeElement;
            fixture.detectChanges();
            expect(gaugeDOMEl.querySelectorAll('div.small-needle').length).toBe(1);
            expect(gaugeDOMEl.querySelectorAll('div.big-needle')[0].style.transform).toBe('rotate(60deg)');
            expect(gaugeDOMEl.querySelectorAll('div.small-needle')[0].style.transform).toBe('rotate(275deg)');
            expect(gaugeDOMEl.querySelectorAll('div.counter')[0].textContent).toBe('1200');
          });
      }));
  });
}

@Component({
  selector: 'test-cmp',
  template: `<sd-gauge class="gauge rightGauge" [amount]="1200"
        [bigNeedleDeg]="60" [smallNeedleDeg]="275" [isSpeed]="false"></sd-gauge>`
})
class TestComponent {}

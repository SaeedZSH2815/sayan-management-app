import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleObserComponent } from './sample-obser.component';

describe('SampleObserComponent', () => {
  let component: SampleObserComponent;
  let fixture: ComponentFixture<SampleObserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleObserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleObserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

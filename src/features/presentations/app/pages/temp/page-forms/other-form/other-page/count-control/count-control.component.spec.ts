import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountControlComponent } from './count-control.component';

describe('CountControlComponent', () => {
  let component: CountControlComponent;
  let fixture: ComponentFixture<CountControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

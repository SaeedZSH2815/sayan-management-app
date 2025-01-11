import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserFormComponent } from './obser-form.component';

describe('ObserFormComponent', () => {
  let component: ObserFormComponent;
  let fixture: ComponentFixture<ObserFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObserFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObserFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

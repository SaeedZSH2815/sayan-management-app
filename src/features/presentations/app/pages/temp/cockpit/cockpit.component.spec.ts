import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CockpitComponent } from './cockpit.component';

describe('CockpitComponent', () => {
  let component: CockpitComponent;
  let fixture: ComponentFixture<CockpitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CockpitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CockpitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

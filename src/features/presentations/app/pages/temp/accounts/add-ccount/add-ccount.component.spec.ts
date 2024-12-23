import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCcountComponent } from './add-ccount.component';

describe('AddCcountComponent', () => {
  let component: AddCcountComponent;
  let fixture: ComponentFixture<AddCcountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCcountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

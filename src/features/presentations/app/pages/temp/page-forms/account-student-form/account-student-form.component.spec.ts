import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountStudentFormComponent } from './account-student-form.component';

describe('AccountStudentFormComponent', () => {
  let component: AccountStudentFormComponent;
  let fixture: ComponentFixture<AccountStudentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountStudentFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountStudentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

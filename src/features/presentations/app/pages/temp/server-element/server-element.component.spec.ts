import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerElementComponent } from './server-element.component';

describe('ServerElementComponent', () => {
  let component: ServerElementComponent;
  let fixture: ComponentFixture<ServerElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServerElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

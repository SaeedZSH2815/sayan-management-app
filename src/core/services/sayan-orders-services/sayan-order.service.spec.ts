import { TestBed } from '@angular/core/testing';

import { SayanOrderService } from './sayan-order.service';

describe('SayanOrderService', () => {
  let service: SayanOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SayanOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

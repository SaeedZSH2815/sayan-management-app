import { TestBed } from '@angular/core/testing';

import { SayanOrderServicesService } from './sayan-order-services.service';

describe('SayanOrderServicesService', () => {
  let service: SayanOrderServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SayanOrderServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

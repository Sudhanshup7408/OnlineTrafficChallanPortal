import { TestBed } from '@angular/core/testing';

import { OnlineTrafficChallanServiceService } from './online-traffic-challan-service.service';

describe('OnlineTrafficChallanServiceService', () => {
  let service: OnlineTrafficChallanServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlineTrafficChallanServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { OSOSApiService } from './osos-api.service';

describe('OSOSApiService', () => {
  let service: OSOSApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OSOSApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

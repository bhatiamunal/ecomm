import { TestBed } from '@angular/core/testing';

import { CallingAPIService } from './calling-api.service';

describe('CallingAPIService', () => {
  let service: CallingAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CallingAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

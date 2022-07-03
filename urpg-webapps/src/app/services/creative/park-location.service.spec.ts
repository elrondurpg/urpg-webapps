import { TestBed } from '@angular/core/testing';

import { ParkLocationService } from './park-location.service';

describe('ParkLocationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParkLocationService = TestBed.get(ParkLocationService);
    expect(service).toBeTruthy();
  });
});

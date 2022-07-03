import { TestBed } from '@angular/core/testing';

import { ParkRankService } from './park-rank.service';

describe('ParkRankService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParkRankService = TestBed.get(ParkRankService);
    expect(service).toBeTruthy();
  });
});

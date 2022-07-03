import { TestBed } from '@angular/core/testing';

import { ContestRankService } from './contest-rank.service';

describe('ContestRankService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContestRankService = TestBed.get(ContestRankService);
    expect(service).toBeTruthy();
  });
});

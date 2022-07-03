import { TestBed } from '@angular/core/testing';

import { ArtRankService } from './art-rank.service';

describe('ArtRankService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArtRankService = TestBed.get(ArtRankService);
    expect(service).toBeTruthy();
  });
});

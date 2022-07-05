import { TestBed } from '@angular/core/testing';

import { KnownChampionService } from './known-champion.service';

describe('KnownChampionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KnownChampionService = TestBed.get(KnownChampionService);
    expect(service).toBeTruthy();
  });
});

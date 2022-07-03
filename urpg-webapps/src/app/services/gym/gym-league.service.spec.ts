import { TestBed } from '@angular/core/testing';

import { GymLeagueService } from './gym-league.service';

describe('GymLeagueService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GymLeagueService = TestBed.get(GymLeagueService);
    expect(service).toBeTruthy();
  });
});

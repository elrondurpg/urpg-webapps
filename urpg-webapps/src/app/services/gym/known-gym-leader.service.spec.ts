import { TestBed } from '@angular/core/testing';

import { KnownGymLeaderService } from './known-gym-leader.service';

describe('KnownGymLeaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KnownGymLeaderService = TestBed.get(KnownGymLeaderService);
    expect(service).toBeTruthy();
  });
});
